import {FormGroup} from "@angular/forms";
export abstract class AbstractValidators {

  protected formsError;

  protected validationMessages;

  abstract getValidationMessages(): any;

  abstract getFormsErrors(): any;

  abstract getFormGroup(): FormGroup;

  protected constructor() {
    this.formsError = this.getFormsErrors();
    this.validationMessages = this.getValidationMessages();
  }

  validateProduitForm(group: FormGroup = this.getFormGroup()) {
    Object.keys(group.controls)
      .forEach((key) => {
        const abstractControl = group.get(key);

        this.formsError[key] = '';
        const msgError = this.validationMessages[key];

        if (abstractControl && abstractControl.touched && abstractControl.invalid) {
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formsError[key] += msgError[errorKey] + ' ';
            }
          }
        }

        if (abstractControl instanceof FormGroup) {
          this.validateProduitForm(abstractControl);
        }
      });
    console.log(this.formsError)
  }
}
