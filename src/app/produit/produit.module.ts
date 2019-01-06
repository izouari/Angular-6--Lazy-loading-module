import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitListComponent} from "./list/produit-list.component";
import {ProduitComponent} from "./creation/produit.component";
import {ProduitRoutingModule} from "./produit-routing.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProduitComponent,
    ProduitListComponent,
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProduitModule {}
