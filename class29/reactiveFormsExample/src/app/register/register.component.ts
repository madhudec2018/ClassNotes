import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StartingWithAlphaValidator } from '../common/alpha-start-validator';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   registerFormGroup: FormGroup; // class
 //  emailControl: FormControl;

   constructor(fb: FormBuilder) {
     // this.emailControl = new FormControl('', Validators.email);
    //  const emailControlValidations = Validators.compose([Validators.email, Validators.required]);
    //  this.emailControl = new FormControl('', emailControlValidations); // valid
    //  this.registerFormGroup = new FormGroup({
    //         'email': this.emailControl
    //  });


     // const emailControlValidations = ;
    //  this.emailControl = new FormControl('', Validators.compose([Validators.email, Validators.required])); // valid
    //  this.registerFormGroup = new FormGroup({
    //         'email': this.emailControl,
    //         'addressFormGroup': new FormGroup({
    //           'location': this.emailControl
    //         })
    //  });

    this.registerFormGroup = fb.group({
      'email' : ['', Validators.compose([Validators.email, Validators.required]) ],
      'password': ['', Validators.compose([Validators.required, StartingWithAlphaValidator])]
    });

    this.registerFormGroup.controls['email'].valueChanges.subscribe((value) => {
         console.log('value changed');
    });

   }

   onSubmit(formgroup: FormGroup) {
     if ( formgroup.dirty && formgroup.valid ) {
           console.dir(formgroup.value);
           // make an api
     }
    //  const output = {
    //     email : '',
    //     address : {
    //           city: '',
    //          location: {

    //          }
    //     }
    //  };

   }
}
