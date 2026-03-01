import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'div[app-product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() productAddEventEmitter: EventEmitter<Product> = new EventEmitter();

  onAddCart() {
    this.productAddEventEmitter.emit(this.product);
  }

}
