import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private authService : AuthService,
    private tosater : ToastrService,
    private router : Router) {}


  submit(loginData : NgForm){
    let token = this.authService.login(loginData.value);
    if(token){
      localStorage.setItem("Token",token.userName);
      this.tosater.success("Login Success","Login Status")
      this.router.navigate(['/'])
    }else{
      this.tosater.error("Login Fali","Login Status")
    }
  }
}
