import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.model';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 
  constructor(private http: HttpClient) { }

  public getCarouselItems():Observable<Carousel>{
    const urlEndPoint: string = "http://localhost:3005/carousel";
    return this.http.get<Carousel>(urlEndPoint);
  }

  public getBannerItems():Observable<Banner[]>{
    const urlEndPoint: string = "http://localhost:3005/banners";
    return this.http.get<Banner[]>(urlEndPoint);
  }
}
