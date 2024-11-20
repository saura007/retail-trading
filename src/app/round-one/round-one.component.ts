import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from '../shared/charts/pie-chart/pie-chart.component';
import { AmountInputComponent } from '../shared/amount-input/amount-input.component';
import { ProgressStepperComponent } from '../shared/progress-stepper/progress-stepper.component';

@Component({
  selector: 'app-round-one',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatIconModule, FormsModule, PieChartComponent, AmountInputComponent, ProgressStepperComponent],
  templateUrl: './round-one.component.html',
  styleUrl: './round-one.component.scss'
})
export class RoundOneComponent {
  portfolioData = {
    userId: 'abc123',
    portfolioValue: 500000,
    assetAllocations: [
      {
        assetName: 'Tech ETF',
        allocation: 200000
      },
      {
        assetName: 'All Market ETF',
        allocation: 300000
      }
    ]
  };

  amount: string = '';

  onReview() {
    // Handle review logic
  }

  onBuy() {
    // Handle buy logic
  }

  onSell() {
    // Handle sell logic
  }
}
