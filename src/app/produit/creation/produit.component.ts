import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ValidationMessages} from "./validation.message";

@Component({
  selector: 'app-produit',
  templateUrl: 'produit.component.html',
  styleUrls: ['produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produitForm: FormGroup;

  formsError = {
    'ref': '',
    'quatite': '',
    'prixUnitaire': ''
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.createProduitForm();

    this.produitForm.valueChanges.subscribe(() => {
      this.validateProduitForm();
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

  validateProduitForm(group: FormGroup = this.produitForm) {
    Object.keys(group.controls)
      .forEach((key) => {
        const abstractControl = group.get(key);

        this.formsError[key] = '';
        const msgError = ValidationMessages[key];

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
