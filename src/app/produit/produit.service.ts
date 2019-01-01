import { Injectable } from '@angular/core';
import {Produit} from "./model/produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../config/api.url.config";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  constructor(private httpClient: HttpClient) {
  }

  public getProduits(): Observable<Produit[]>  {
    console.log("service getProduits")
    return this.httpClient.get<Produit[]>(API_URL.PRODUITS_URL);
  }
}
