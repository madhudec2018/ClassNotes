import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { TextHighLightDirective } from './common/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    TextHighLightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
    // ReactiveFormsModule
  ],
  // {provide: LoginService, useClass: LoginService}
  providers: [LoginService,
   { provide: 'LOGIN_API_URL', useValue: '/login' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
