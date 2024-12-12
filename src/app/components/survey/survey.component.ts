import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { SurveyQuestion, SurveyResponse } from '../../models/survey.interface';

@Component({
  selector: 'app-survey',
  template: `
    <div class="survey-container">
      <ng-container *ngFor="let question of questions">
        <div class="question-card">
          <h3>{{question.text}}</h3>
          
          <ng-container [ngSwitch]="question.type">
            <!-- Multiple Choice -->
            <div *ngSwitchCase="'multiple_choice'" class="options">
              <mat-radio-group [(ngModel)]="responses[question.id]">
                <mat-radio-button *ngFor="let option of question.options" 
                  [value]="option.value">
                  {{option.text}}
                </mat-radio-button>
              </mat-radio-group>
            </div>

            <!-- Text Input -->
            <div *ngSwitchCase="'text'">
              <mat-form-field>
                <textarea matInput [(ngModel)]="responses[question.id]"
                  placeholder="Enter your answer"></textarea>
              </mat-form-field>
            </div>

            <!-- Rating -->
            <div *ngSwitchCase="'rating'" class="rating">
              <mat-slider min="1" max="5" [(ngModel)]="responses[question.id]">
              </mat-slider>
            </div>
          </ng-container>
        </div>
      </ng-container>

      <button mat-raised-button color="primary" 
        (click)="submitSurvey()" 
        [disabled]="!isValidForm()">
        Submit
      </button>
    </div>
  `
})
export class SurveyComponent implements OnInit {
  questions: SurveyQuestion[] = [];
  responses: { [key: string]: any } = {};

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveyService.getSurveyQuestions('round-1').subscribe(
      questions => this.questions = questions
    );
  }

  isValidForm(): boolean {
    return this.questions.every(q => 
      !q.required || (this.responses[q.id] !== undefined && this.responses[q.id] !== '')
    );
  }

  submitSurvey() {
    const responses = Object.entries(this.responses).map(([questionId, answer]) => ({
      questionId,
      answer,
      userId: 'current-user-id', // Get from auth service
      timestamp: new Date()
    }));

    responses.forEach(response => {
      this.surveyService.submitSurveyResponse(response).subscribe();
    });
  }
} 