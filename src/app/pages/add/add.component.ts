import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(
    private form: FormBuilder,
    private productService: ProductService
  ) {}

  productForm = this.form.group({
    name: [''],
    price: [0],
  });

  onSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    };

    this.productService.addProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
