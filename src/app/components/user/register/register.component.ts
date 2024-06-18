import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
  FormControl,

} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

import { RegisterValidator } from '../../../validators/registerValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regiserationFromGroup!: FormGroup;
  private customValidator = new RegisterValidator();

  constructor(
    private toastr: ToastrService,
    private userService : UserService) { }

  ngOnInit(): void {
    // this.regiserationFromGroup = this.fb.group({
    //   userName : [null ,[ Validators.required , Validators.minLength(3)]],
    //   email : [null ,[ Validators.required , Validators.email]],
    //   password : [null ,[ Validators.required , Validators.minLength(6)]],
    //   confirmPassword : [null ,[ Validators.required,this.passwordMatchingValidator(),Validators.pattern("123456")]],
    //   mobile : [null],
    // } , {Validators : this.mpassword.bind(this)})

    this.regiserationFromGroup = new FormGroup(
      {
        userName: new FormControl(null, [
          Validators.required,
          this.customValidator.userNameValidator
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          // this.customValidator.psswordValidator,
          this.customValidator.matchValidator('confirmPassword', true)

        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          this.customValidator.matchValidator('password')

        ]),
        mobile: new FormControl(null, []),
      },
      this.customValidator.passwordMatchingValidator

      //  passwordMatchingValidator

    );
  }

  getControl(name: any): AbstractControl | null {
    return this.regiserationFromGroup.get(name);
  }


  userData() : IUser{
    let  user = {
      userName : this.getControl("userName")?.value,
      email : this.getControl("email")?.value,
      password : this.getControl("password")?.value,
      mobile : this.getControl("mobile")?.value
    }
    return user;
  }

  submit() {
    this.userService.addUser(this.userData());
    this.toastr.success("Submit Success" , "Submit")
    this.regiserationFromGroup.reset();
  }

}
