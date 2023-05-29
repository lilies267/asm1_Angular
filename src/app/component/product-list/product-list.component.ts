import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  product!: IProduct[];
  constructor(private productServices: ProductService) {
    this.productServices.getsProduct().subscribe((data) => {
      this.product = data;
    });
  }

  removeProduct(id: string | number) {
    this.productServices.remoteProduct(id).subscribe((data) => {
      this.product = this.product.filter((product) => product.id !== id);
    });
  }
}
