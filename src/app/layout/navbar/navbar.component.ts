import { Component } from '@angular/core';
import { Category } from '../../items/models/CategoryInterface.model';
import { ItemService } from '../../items/services/item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  categories: Category[] = [];

  constructor(
    private service: ItemService
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
}
