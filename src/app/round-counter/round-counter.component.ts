import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-round-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './round-counter.component.html',
  styleUrl: './round-counter.component.scss'
})


export class RoundCounterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Navigate to round screen after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/round-one']);
    }, 1000);
  }
}