import { Injectable, Inject } from '@angular/core';
import { INSPECT_MAX_BYTES } from 'buffer';


@Injectable()
export class LoginService {
  userProfile: any;

  constructor (@Inject('LOGIN_API_URL') urlPassed) {
     console.log(urlPassed);
  }

  getUserProfile () {
    return this.userProfile;
  }

  doLogin (obj) {
    this.userProfile =  {
      firstName : 'Madhu',
      lastName  : 'A',
      emailAddress: 'madhu@example.com',
      isLoggedIn : true
   };
    // this is a asynchronous call
    // here we will make a real api call
    // we get a value
    // userprofile

    // login true
    // userprofie
  }

}
