import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitListComponent} from "./list/produit-list.component";
import {ProduitComponent} from "./creation/produit.component";

const routes: Routes = [
  {path: '', component: ProduitListComponent},
  {path: 'creation', component: ProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
