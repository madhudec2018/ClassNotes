import { Component, OnInit } from '@angular/core';
import { INotify } from './INotify';
import { BaseComponent } from './base.component';


@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent extends BaseComponent implements INotify, OnInit {
 customers: Array<any>;
 searchValue: string;
 originalCustomers: Array<any>;
 ngOnInit() {
   this.searchValue = '';
    this.originalCustomers = [
       { first: 'John', last: 'Schneider', amount: 3000},
       { first: 'Amy', last: 'Jackson', amount: 6000},
       { first: 'Ryan', last: 'Dahl', amount: 500},
       { first: 'Bob', last: 'Wescott', amount: 200},
       { first: 'Zack', last: 'Jimmerman', amount: 4000}
    ];
    this.filter();
 }

 filter () {
   this.customers = this.originalCustomers.filter( (customer) => {
    const re = new RegExp(this.searchValue, 'i');
     // a || b || c;
    return re.test(customer.first) || re.test(customer.last) || re.test(customer.amount);
   });
 }


 send() {

 }

 print() {
   super.print();
 }

 notify(message: String) {
  print();
 }

 onCustomerSearch() {
   this.filter();
 }

}
