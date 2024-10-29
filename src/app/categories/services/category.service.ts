import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategoryItems():Observable<Category[]>{
    const urlEndPoint: string = "http://localhost:3005/categories";
    return this.http.get<Category[]>(urlEndPoint);
  }
}
