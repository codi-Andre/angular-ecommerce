import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ButtonComponent } from '../../../../components/ui/button/button.component';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
