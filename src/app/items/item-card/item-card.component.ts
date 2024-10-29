import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemInterface } from '../models/ItemInterface.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item?: ItemInterface;
  @Input() buttonText: string = "Pulsar";
  @Output() click: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  
  }

  public navigateTo(): void {
    this.click.emit(this.item?.id);
  }
}

