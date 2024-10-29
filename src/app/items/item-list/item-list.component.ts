import { Component } from '@angular/core';
import { ItemInterface } from '../models/ItemInterface.model';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: ItemInterface[] = [];

  constructor(
    private router: Router,
    private service: ItemService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.service.getItems().subscribe(
      (data: ItemInterface[]) => {
        this.items = data;
      }
    );
  }

  public navigateTo(idItem: number): void {
    this.router.navigate(['item-list', idItem]);
  }
}
