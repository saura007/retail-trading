
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData } from '../../../models/ard-retail-simulator';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {
  @Input() data!: PortfolioData;
  @Input() size: number = 126;

  calculatePercentage(allocation: number): number {
    return (allocation / this.data.portfolioValue) * 100;
  }

  ngOnInit() {
    if (!this.data) {
      console.error('Portfolio data is required for pie chart');
    }
  }
}
