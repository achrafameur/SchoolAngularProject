import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Produit } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  host="http://localhost:8082/api/"
  constructor(private client:HttpClient) { }

    public getProducts():Observable<Produit[]>{
    return this.client.get<Produit[]>(this.host+"products");
    }

    public getProductById(id:number):Observable<Produit>{
    return this.client.get<Produit>(this.host+"product/"+id);
    }

    public addProduct(produit:Produit):Observable<void>{
    return this.client.post<void>(this.host+"addproduct",produit);
    }

    public delProduct(id:number):Observable<void>{
      return this.client.delete<void>(this.host+"deleteproduct/"+id);
    }

    public updateProduct(produit:Produit):Observable<void>{
      return this.client.post<void>(this.host+"addproduct",produit)
    }

}
