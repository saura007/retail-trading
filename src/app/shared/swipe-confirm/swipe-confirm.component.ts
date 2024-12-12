import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-swipe-confirm',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './swipe-confirm.component.html',
  styleUrls: ['./swipe-confirm.component.scss']
})
export class SwipeConfirmComponent {
  @Output() confirmed = new EventEmitter<void>();
  @ViewChild('sliderThumb') sliderThumb!: ElementRef;

  isDragging = false;
  startX = 0;
  position = 0;
  isConfirmed = false;
  private readonly threshold = 0.9;

  private handleDrag(clientX: number) {
    if (this.isConfirmed) return;
    
    const track = this.sliderThumb.nativeElement.parentElement;
    const maxX = track.clientWidth - this.sliderThumb.nativeElement.clientWidth;
    
    this.position = Math.max(0, Math.min(maxX, clientX - this.startX));

    if (this.position >= maxX * this.threshold) {
      this.position = maxX;
      this.isDragging = false;
      this.isConfirmed = true;
      this.confirmed.emit();
    }
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.position;
    event.preventDefault();
  }

  startTouchDragging(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX - this.position;
    event.preventDefault();
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    this.handleDrag(event.clientX);
  }

  onTouchDrag(event: TouchEvent) {
    if (!this.isDragging) return;
    this.handleDrag(event.touches[0].clientX);
    event.preventDefault();
  }

  stopDragging() {
    if (!this.isDragging) return;
    this.isDragging = false;
  }
} 