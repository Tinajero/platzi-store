import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
    .subscribe(product => {
      console.log(product);
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo',
      price: 8050,
      description: 'this is the test for a create in a post',
      image: 'assets/images/banner-1.jpg'
    };

    this.productService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {

    const newProduct: Partial<Product> = {
      title: 'edicion de titulo',
      price: 5555,
      description: 'editadot',
    };

    this.productService.updateProduct( '2', newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {

    this.productService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
