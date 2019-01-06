import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../produit.service";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produits: Produit [];
  private _searchTerm: string;
  produitsFiltred: Produit [];

  constructor(private produitService: ProduitService) {
  }

  ngOnInit() {

    this.produitService.getProduits()
      .subscribe((produits) => {
        console.log("Prod : ", this.produits = produits);
        this.produitsFiltred = this.produits;
      }, (error) => console.log("Error : ", error));


  }

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(searchPattern: string) {
    this._searchTerm = searchPattern;
    this.produitsFiltred = this.filtrerList(this._searchTerm);
  }

  filtrerList(searchPattern: string) {
    return this.produits.filter(produit => {
      console.log("produit.ref : ", produit.ref)
      return produit.ref.toLocaleLowerCase().indexOf(searchPattern.toLocaleLowerCase()) !== -1;
    });

  }

}
