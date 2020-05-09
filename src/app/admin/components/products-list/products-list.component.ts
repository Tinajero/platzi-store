import { Component, OnInit } from '@angular/core';
import {  ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe(rta => {
      console.log(rta);
      // this.fetchProduct();
      if ( rta ) {
        this.products = this.products.filter(product => product.id !== id);
      }
    });
  }

}
