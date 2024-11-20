
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-amount-input',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './amount-input.component.html',
  styleUrl: './amount-input.component.scss'
})
export class AmountInputComponent {
  @Input() value: string = '';
  @Input() hint?: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() buy = new EventEmitter<void>();
  @Output() sell = new EventEmitter<void>();

  onValueChange(value: string) {
    this.valueChange.emit(value);
  }

  onBuy() {
    this.buy.emit();
  }

  onSell() {
    this.sell.emit();
  }
}
