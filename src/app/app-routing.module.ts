import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ProduitComponent} from "./produit/creation/produit.component";
import {HomeComponent} from "./home/home.component";
import {ProduitListComponent} from "./produit/list/produit-list.component";
import {PageNotFoundComponent} from "./share/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'produits', loadChildren: './produit/produit.module#ProduitModule'},
  {path: 'clients', loadChildren: './client/client.module#ClientModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
