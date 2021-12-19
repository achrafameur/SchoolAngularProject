import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private router: Router,private service:ProduitService) { }
  nom: any;
  id!:number;
  products !:Produit[];
  urlImg = "./assets/image/" 
  
  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.products=data;
    });
  }

  valeurB:string="masquer"

  

  afficher(){
    if(this.valeurB=="masquer")
      this.valeurB="afficher"
    else
      this.valeurB="masquer"
  }

  getColor(x:number):string{
    if(x==0)
      return 'red'
    else
      return 'black'  
  }

  set texte(s:string){
    this.products=this.filtrer(s);
  }

  filtrer(s:string){
    return this.products.filter((el)=>el.nom.indexOf(s)!=-1)
  }

  redirectTo(url: any) {
    this.router.navigate([url]);
  }

  delete(id:number){
    console.log(id)
    this.service.delProduct(id).subscribe(()=>{
      this.service.getProducts().subscribe(data=>{
        this.products=data;
      });
    }
    )
  }
}
