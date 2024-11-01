import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { AboutComponent } from './about/about.component';
import { ItemListComponent } from './items/item-list/item-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories/:categoryName', component: ItemListComponent},
  { path: 'items/:idItem', component: ItemFormComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
