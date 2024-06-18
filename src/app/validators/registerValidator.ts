import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegisterValidator{

  userNameValidator  (ac : AbstractControl)  {

    const name = ac.value as string;
      if(name != null && name.length>0){
        if(name.trim().length < 3)
        return {invalidName:true}
      }
      return null

   }
   psswordValidator  (ac : AbstractControl)  {
    const password = ac.value as string;
      if(password != null && password.length>0){
        if(password.trim().length < 6)
        return {invalidPassword:true}
      }
      return null

   }
  passwordMatchingValidator(ac: AbstractControl) {
    const password = ac.get('password')?.value as string;
    const confirmPassword = ac.get('confirmPassword')?.value ;

    return confirmPassword == password ? null : {passwordMisMatch:true}

  }

  passwordMatchingValidator2(ac: FormGroup) {
    const password = ac.get('password')?.value as string;
    const confirmPassword = ac.get('confirmPassword')?.value ;
    return confirmPassword == password ? null : {passwordMisMatch:true}
  }

  matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value ===
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

}
