import { Component, Input } from '@angular/core';
import { Agencia } from '../../interface/agencia.interface';


@Component({
  selector: 'agencia-agencia-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() agencia!: Agencia; // Recibe el objeto Agencia del componente padre
}
