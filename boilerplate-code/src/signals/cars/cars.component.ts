import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars = [
    { name: 'Tesla Model S', price: '$80k' },
    { name: 'BMW 3 Series', price: '$45k' },
    { name: 'Audi A4', price: '$50k' }
  ];
  cartCount = 0;

  addToCart(item: { name: string; price: string }) {
    this.cartCount++;
    console.log('Added to cart:', item);
  }
}
