import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  product!: IProduct;
  productForm = this.form.group({
    name: [''],
    price: [0],
  });
  constructor(
    private form: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);

      this.productService.getProduct(id!).subscribe((data) => {
        this.product = data;
        console.log(data);

        this.productForm.patchValue({
          name: data.name,
          price: data.price,
        });
      });
    });
  }

  onSubmit() {
    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    };

    this.productService.editProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
