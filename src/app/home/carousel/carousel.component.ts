import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Carousel } from '../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: string[] = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getCarousel();
  }

  private getCarousel() {
    this.service.getCarouselItems().subscribe(
      (data: Carousel) => {
        this.images = [data.image1, data.image2, data.image3];
      }
    );
  }
}
