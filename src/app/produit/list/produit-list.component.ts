import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produit.service";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produits: Produit [];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {

    this.produitService.getProduits()
      .subscribe((produits) => {
          console.log("Prod : ", this.produits = produits)
        },
        (error) => console.log("Error : ", error));
  }

}
