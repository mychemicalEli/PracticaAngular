import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { DressesComponent } from './dresses/dresses.component';
import { BagsComponent } from './bags/bags.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { JeansComponent } from './jeans/jeans.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    DressesComponent,
    BagsComponent,
    TShirtsComponent,
    ShoesComponent,
    JeansComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
