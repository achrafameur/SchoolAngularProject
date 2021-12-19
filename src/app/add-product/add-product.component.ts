import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  p !:Produit;
  
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
  }
  

  ajouter(f:NgForm){
    console.log(f.value.nom)
    console.log(f.value.prix)
    console.log(f.value.quantite)
    this.service.addProduct(f.value).subscribe(()=>{
      window.location.href="http://localhost:4200/products"
    });
  }
}
