import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  selectedProduct?: Produit;
  produit?: Produit;
  nom?:string;
  urlImg = "./assets/image/"
  valeurB:string="masquer"

  product !:Produit ;
  id!: number;

  constructor(private router: Router,private ar:ActivatedRoute,private service:ProduitService) { }


  ngOnInit(): void {
    let id:number;
    this.ar.paramMap.subscribe((params : Params)=>{
        id=+params.get('id')
        this.service.getProductById(id).subscribe(
          data=>{ this.product = data; }
        )
      }
    )
  };

  afficher(){
    if(this.valeurB=="masquer")
      this.valeurB="afficher"
    else
      this.valeurB="masquer"
  }
}
  // getColor(x:number):string{
  //   if(x==0)
  //     return 'red'
  //   else
  //     return 'black'  
  // }

  // set texte(s:string){
  //   this.products=this.filtrer(s);
  // }

  // filtrer(s:string){
  //   return this.products.filter((el)=>el.nom.indexOf(s)!=-1)
  // }

  // redirectTo(url: any) {
  //   this.router.navigate([url]);
  // }

  // produitD():void{
  //   this.selectedProduct=this.products.find(el => el.id == this.id);
  //   console.log(this.selectedProduct) 
  // }

