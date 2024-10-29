import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 
  constructor(private http: HttpClient) { }

  public getCarouselItems():Observable<Carousel>{
    const urlEndPoint: string = "http://localhost:3005/carousel";
    return this.http.get<Carousel>(urlEndPoint);
  }
}
