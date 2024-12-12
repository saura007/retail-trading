import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from '../shared/charts/pie-chart/pie-chart.component';
import { ProgressStepperComponent } from '../shared/progress-stepper/progress-stepper.component';
import { BottomSheetComponent } from '../shared/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-round-one',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatInputModule, 
    MatIconModule, 
    FormsModule, 
    PieChartComponent, 
    ProgressStepperComponent, 
    BottomSheetComponent
  ],
  templateUrl: './round-one.component.html',
  styleUrl: './round-one.component.scss'
})
export class RoundOneComponent {
  currentStep = 2;

  portfolioData = {
    userId: 'abc123',
    portfolioValue: 10000,
    assetAllocations: [
      {
        assetName: 'Tech ETF',
        allocation: 4000,
        percentage: 40
      },
      {
        assetName: 'U.S Total Market (Excluding Tech)',
        allocation: 6000,
        percentage: 60
      }
    ]
  };

  amount: string = '';
  isBottomSheetOpen = false;

  onNext() {
    this.isBottomSheetOpen = true;
  }

  onBottomSheetClose() {
    this.isBottomSheetOpen = false;
  }

  onBuy() {
    // Handle buy logic
    console.log('Buying:', this.amount);
  }

  onSell() {
    // Handle sell logic
    console.log('Selling:', this.amount);
  }

  onConfirmed() {
    // Handle confirmation logic
    console.log('Confirmed action');
    this.isBottomSheetOpen = false;
  }
}
