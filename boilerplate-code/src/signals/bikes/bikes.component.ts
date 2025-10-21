import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent {
  bikes = [
    { name: 'Yamaha YZF-R3', price: '$5k' },
    { name: 'Kawasaki Ninja', price: '$7k' },
    { name: 'Ducati Panigale', price: '$20k' }
  ];
  cartCount = 0;

  addToCart(item: { name: string; price: string }) {
    this.cartCount++;
    console.log('Added to cart:', item);
  }
}
