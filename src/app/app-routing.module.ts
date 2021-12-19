import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: "acceuil", component:AcceuilComponent},
  { path: "products", component:ListeProduitComponent},
  { path: "products/:id", component:DetailsComponent},
  { path: "addproduct", component:AddProductComponent},
  { path: "updateProduct/:id", component:UpdateProductComponent},
  { path: "", redirectTo:'/acceuil',pathMatch:'full'},
  { path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
