import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../items/models/CategoryInterface.model';
import { ItemService } from '../../items/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-cards.component.html',
  styleUrl: './categories-cards.component.scss'
})
export class CategoriesCardsComponent {
  categories: Category[] = [];

  constructor(
    private service: ItemService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.service.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    );
  }

  public formatCategoryName(name: string): string {
    return name.toLowerCase().replace(/ /g, '-');
  }

}
