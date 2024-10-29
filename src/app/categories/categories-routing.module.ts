import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { BagsComponent } from './bags/bags.component';
import { DressesComponent } from './dresses/dresses.component';
import { JeansComponent } from './jeans/jeans.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { ItemListComponent } from '../items/item-list/item-list.component';
import { ItemFormComponent } from '../items/item-form/item-form.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 'shoes', component: ShoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
