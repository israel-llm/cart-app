import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from "./components/cart-app/cart-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CartAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
