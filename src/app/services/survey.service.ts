import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyQuestion, SurveyResponse } from '../models/survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'your-api-endpoint';

  constructor(private http: HttpClient) {}

  getSurveyQuestions(roundId: string): Observable<SurveyQuestion[]> {
    return this.http.get<SurveyQuestion[]>(`${this.apiUrl}/surveys/${roundId}/questions`);
  }

  submitSurveyResponse(response: SurveyResponse): Observable<any> {
    return this.http.post(`${this.apiUrl}/surveys/responses`, response);
  }
} 