import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ValidationMessages} from "./validation.message";
import {AbstractValidators} from "../../share/validators-custom/abstract-validator";

@Component({
  selector: 'app-produit',
  templateUrl: 'produit.component.html',
  styleUrls: ['produit.component.scss']
})
export class ProduitComponent extends AbstractValidators  implements OnInit {

  produitForm: FormGroup;

  formsError = {
    'ref': '',
    'quatite': '',
    'prixUnitaire': ''
  }

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {

    this.createProduitForm();

    this.produitForm.valueChanges.subscribe(() => {
      this.validateForm();
    })


  }

  createProduitForm() {
    this.produitForm = this.fb.group({
      ref: ['', [Validators.required, Validators.minLength(4)]],
      quatite: ['', Validators.required],
      prixUnitaire: ['', Validators.required]
    })
  }


  addProduit(): void {
    console.log("addProduit")

  }

  getValidationMessages(): any {
    return ValidationMessages;
  }

  getFormsErrors(): any {
    return this.formsError;
  }

  getFormGroup(): FormGroup {
    return this.produitForm;
  }

}
