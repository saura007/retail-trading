import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-progress-stepper',
  standalone: true,
  imports: [CommonModule, MatStepperModule],
  templateUrl: './progress-stepper.component.html',
  styleUrl: './progress-stepper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProgressStepperComponent {
  @Input() currentStep: number = 1;
  @Input() steps: number[] = [1, 2, 3, 4];
}
