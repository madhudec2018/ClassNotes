import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() loginCompleted: EventEmitter<any>  = new EventEmitter();

 // myLoginService: LoginService;
 // private loginService;
  constructor(private loginService: LoginService) {
     // this.myLoginService = loginService;
     // this.loginService = loginService
  }




  onLogin(ngFormObj) {
    const formValues = ngFormObj.value;
    this.loginService.doLogin(formValues);
    this.loginCompleted.emit(true);
   // this.myLoginService.doLogin();
   // make a webservice/api call to check whether the credentials are correct , we will validate
   // service//data api calls// shared data between components
  }

  checkNgForm(formObj) {

  }
}
