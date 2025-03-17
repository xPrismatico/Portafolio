import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  // Estado para controlar qué sinopsis está desplegada
  public expandedSinopsis: { [key: string]: boolean } = {};


  // Método para alternar el estado de la sinopsis
  public toggleSinopsis(id: string): void {
    this.expandedSinopsis[id] = !this.expandedSinopsis[id];
  }
}
