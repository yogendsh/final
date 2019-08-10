import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginid='';
  loginpassword='';
  invalidLogin=false;
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
    

  ngOnInit() {
  }
  submitLogin(){
    this.router.navigateByUrl('demand');
   }
   checkLogin() {
    if (this.loginservice.authenticate(this.loginid, this.loginpassword)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
