import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
   selector: 'product-list',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 @Input() productList: [];

 list: any;

 @Output() productSelectedEvent: EventEmitter<any>;

 selectedProduct: any;



 constructor() {
     this.productSelectedEvent = new EventEmitter();
 }

 onMouseMove() {

 }
  // checkIfStar (product) {
  //   console.log('Star checking');
  //   return product.price > 80;
  // }

 ngOnInit() {
   this.list = this.productList.map((product) => {
       const newProduct: any = Object.assign({}, product);
       newProduct.dynamicClassObj = {
        'table-success': true
       };
       return newProduct;
   });
 }
// input --> pass some thing to me
// output --> I want to send some thing
 productSelected(product) {
  this.selectedProduct = product;
  this.list.forEach(prod => {
        delete prod.dynamicClassObj['table-active'];
  });

  product.dynamicClassObj['table-active'] = true;
  this.productSelectedEvent.emit(product);
  console.log(' You have selected product ' + product.name);
 }
}
