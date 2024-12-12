import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.scss']
})
export class ProgressStepperComponent {
  @Input() currentStep: number = 1;
  steps = Array(10).fill(0);

  isActive(index: number): boolean {
    return index < this.currentStep;
  }
}
