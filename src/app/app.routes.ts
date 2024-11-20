import { Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RoundCounterComponent } from './round-counter/round-counter.component';
import { RoundOneComponent } from './round-one/round-one.component';

export const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'counter', component: RoundCounterComponent },
  { path: 'round-one', component: RoundOneComponent },
  // Add other routes here
];
