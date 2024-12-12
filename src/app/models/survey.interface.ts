export interface SurveyQuestion {
  id: string;
  text: string;
  type: 'multiple_choice' | 'text' | 'rating';
  options?: SurveyOption[];
  required: boolean;
}

export interface SurveyOption {
  id: string;
  text: string;
  value: string | number;
}

export interface SurveyResponse {
  questionId: string;
  answer: string | number;
  userId: string;
  timestamp: Date;
} 