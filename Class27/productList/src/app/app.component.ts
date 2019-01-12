import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productList';
  profile: any;
  person: any = {
    name : 'John'
  };
  productList: any[];
  selectedProduct: any;
  userLoggedIn = false;
  constructor(private loginService: LoginService) {
    this.productList = this.getProductList();
  }

  productSelected(ProductSentFromChild) {
    this.selectedProduct = ProductSentFromChild;
  }

  updateModel(val) {
   this.person.name = val;
  }

  onLogin(value) {
   const profile =  this.loginService.getUserProfile();
    if ( profile.isLoggedIn ) {
      this.profile = profile;
      this.userLoggedIn = true;
   }
  }

  getProductList(): any[] {
  // var mock or stub
   const list: any[] = [
          {
              code: 'SKU3000',
              name: ' Leather Jacket',
              price : '100'
          },
          {
            code: 'SKU4000',
            name: ' Coat ',
            price : '80'
          },
          {
            code: 'SKU5000',
            name: 'Hat',
            price : '50'
          }
   ];
   return list;
  }
}
