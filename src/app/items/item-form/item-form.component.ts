import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  idItem?:string;

  constructor(private route: ActivatedRoute ){}

  ngOnInit():void{
  this.idItem= this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
}
}