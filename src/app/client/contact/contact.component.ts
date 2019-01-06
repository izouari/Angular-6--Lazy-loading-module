import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {AbstractValidators} from "../../share/validators-custom/abstract-validator";
import {VALIDATION_CONTACT_MESSAGE} from "./validation.contact.message";
import {CustomCorssValidator} from "../../share/validators-custom/custom-corss-validator";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends AbstractValidators implements OnInit {

  contactForm: FormGroup;

  formsError = {
    'nom': '',
    'prenom': '',
    'email': '',
    'confirmEmail': '',
     'emailGroup': ''
  };

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      emailGroup: this.fb.group({
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required]
      }, {validator: CustomCorssValidator.requiredEqualsFileds('email', 'confirmEmail')})
    });

    console.log("fff :", this.contactForm.get('emailGroup'))
  }


  getValidationMessages(): any {
    return VALIDATION_CONTACT_MESSAGE;
  }

  getFormsErrors(): any {
    return this.formsError;
  }

  getFormGroup(): FormGroup {
    return this.contactForm;
  }


}
