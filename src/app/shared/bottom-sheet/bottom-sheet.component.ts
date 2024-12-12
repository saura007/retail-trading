import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AmountInputComponent } from '../amount-input/amount-input.component';
import { SwipeConfirmComponent } from '../swipe-confirm/swipe-confirm.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    AmountInputComponent,
    SwipeConfirmComponent
  ],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [
    trigger('slideUpDown', [
      state('void', style({
        transform: 'translateY(100%)'
      })),
      state('*', style({
        transform: 'translateY(0)'
      })),
      transition('void => *', animate('300ms ease-out')),
      transition('* => void', animate('300ms ease-in'))
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BottomSheetComponent {
  @Input() set isOpen(value: boolean) {
    if (!value) {
      // Reset states when drawer is closed
      this.resetStates();
    }
    this._isOpen = value;
  }
  get isOpen(): boolean {
    return this._isOpen;
  }
  private _isOpen = false;
  @Input() amount = '';
  @Output() amountChange = new EventEmitter<string>();
  @Output() buy = new EventEmitter<void>();
  @Output() sell = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  isLoading = false;
  isSuccess = false;

  onAmountChange(value: string) {
    this.amount = value;
    this.amountChange.emit(value);
  }

  onBuy() {
    this.buy.emit();
  }

  onSell() {
    this.sell.emit();
  }

  onConfirmed() {
    this.isLoading = true;
    
    // Show loading for 2 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.isSuccess = true;
      
      // Show success for 1 second before closing
      setTimeout(() => {
        this.confirm.emit();
      }, 1000);
    }, 2000);
  }

  private resetStates() {
    this.isLoading = false;
    this.isSuccess = false;
  }

  onClose() {
    this.resetStates();
    this.close.emit();
  }
} 