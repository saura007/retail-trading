import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
  appName = '[Insert Name]';

  constructor(private router: Router) {}

  startDemo() {
    // Navigate to the first scenario/demo screen
    this.router.navigate(['/counter']);
  }
}
