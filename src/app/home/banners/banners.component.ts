import { Component } from '@angular/core';
import { Banner } from '../models/banner.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss'
})
export class BannersComponent {
  items: Banner[] = [];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.service.getBannerItems().subscribe(
      (data: Banner[]) => {
        this.items = data;
      }
    );
  }

}
