import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss'
})
export class ActionButtonsComponent {
  @Output() buy = new EventEmitter<void>();
  @Output() sell = new EventEmitter<void>();

  onBuy() {
    this.buy.emit();
  }

  onSell() {
    this.sell.emit();
  }
}
