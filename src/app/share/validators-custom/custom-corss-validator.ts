import {ValidatorFn, AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomCorssValidator {

  static requiredEqualsFileds(fild1: string, fild2: string): ValidatorFn | null {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      const filedPattern: string = abstractControl.get(fild1).value;
      const filedToMatch: string = abstractControl.get(fild2).value;

      if (abstractControl.get(fild2).pristine || filedPattern === filedToMatch) {
        return null;
      } else {
        return {'filedsMismatch': true};
      }
    }
  }

}
