import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemInterface } from '../models/ItemInterface.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getItems():Observable<ItemInterface[]>{
    const urlEndPoint: string = "http://localhost:3005/items";
    return this.http.get<ItemInterface[]>(urlEndPoint);
  }

  public getItemById(id: number): Observable<ItemInterface> {
    const urlEndPoint: string = `http://localhost:3005/items/${id}`;
    return this.http.get<ItemInterface>(urlEndPoint);
  }
  
}
