import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemInterface } from '../models/ItemInterface.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  item?: ItemInterface;

  constructor(
    private route: ActivatedRoute,
    private service: ItemService
  ) { }

  ngOnInit(): void {
    this.getItemById();
  }
  
  public getItemById() {
    const idItem = Number(this.route.snapshot.paramMap.get('idItem'));
    this.service.getItemById(idItem).subscribe((data: ItemInterface) => {
      this.item = data;
    });
  }
}