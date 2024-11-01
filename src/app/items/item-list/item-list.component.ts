import { Component, Input } from '@angular/core';
import { ItemInterface } from '../models/ItemInterface.model';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: ItemInterface[] = [];
  categoryName?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ItemService
  ) { }

  ngOnInit(): void {
    this.loadCategoryName();
    this.getItems();
  }

  private loadCategoryName(): void {
    this.route.paramMap.subscribe(params => {
      const rawCategoryName = params.get('categoryName')!;
      this.categoryName = this.formatCategoryTitle(rawCategoryName);
    });
  }

  private formatCategoryTitle(name: string): string {
    return name.replace(/-/g, ' ').toUpperCase();
  }

  private getItems() {
    this.service.getItems().subscribe(
      (data: ItemInterface[]) => {
        this.items = data;
      }
    );
  }

  public navigateTo(idItem: number): void {
    this.router.navigate(['items', idItem]);
  }
}
