import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemCardComponent } from './items/item-card/item-card.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BagsComponent } from './categories/bags/bags.component';
import { DressesComponent } from './categories/dresses/dresses.component';
import { ShoesComponent } from './categories/shoes/shoes.component';
import { JeansComponent } from './categories/jeans/jeans.component';
import { TShirtsComponent } from './categories/t-shirts/t-shirts.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BannersComponent } from './home/banners/banners.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemListComponent,
    ItemCardComponent,
    ItemFormComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BagsComponent,
    DressesComponent,
    ShoesComponent,
    JeansComponent,
    TShirtsComponent,
    CarouselComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
