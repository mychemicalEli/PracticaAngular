import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { AboutComponent } from './about/about.component';
import { BagsComponent } from './categories/bags/bags.component';
import { DressesComponent } from './categories/dresses/dresses.component';
import { JeansComponent } from './categories/jeans/jeans.component';
import { TShirtsComponent } from './categories/t-shirts/t-shirts.component';
import { ShoesComponent } from './categories/shoes/shoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-list/:idItem', component: ItemFormComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 'shoes', component: ShoesComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
