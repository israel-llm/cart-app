import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './modal.component.html'
})
export class ModalComponent {

  @Input() items: CartItem[] = [];
  @Output() idProductEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() closeCartEventEmitter = new EventEmitter();

  onDeleteCart(id: number): void {
    this.idProductEventEmitter.emit(id);
  }

  closeCart(): void {
    this.closeCartEventEmitter.emit();
  }

}
