import { Component } from '@angular/core';
import { Category } from '../../categories/models/category.model';
import { CategoryService } from '../../categories/services/category.service';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-cards.component.html',
  styleUrl: './categories-cards.component.scss'
})
export class CategoriesCardsComponent {
  items: Category[] = [];

  constructor(
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.service.getCategoryItems().subscribe(
      (data: Category[]) => {
        this.items = data;
      }
    );
  }
  
  getCategoryRoute(categoryName: string): string {
    return categoryName;
  }
}
