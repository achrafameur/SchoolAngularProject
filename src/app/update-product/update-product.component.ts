import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id !:number
  produit !:Produit
  constructor(private ar: ActivatedRoute ,private router : Router ,private service:ProduitService) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params.id;
    console.log(this.id);
    this.service.getProductById(this.id).subscribe(data=>this.produit=data)
  }

  modifier(){
      this.service.updateProduct(this.produit).subscribe(()=>{
        this.router.navigate(['/products'])
      })
  }
}
