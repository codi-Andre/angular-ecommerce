import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  variant = input<'primary' | 'outline' | 'link' | 'icon'>('primary');
  size = input<'md' | 'lg' | 'icon'>('md');
  buttonStyles = computed(() => this.variant() + ' ' + this.size());

  handleClick = output();
}
