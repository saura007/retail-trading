import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/**
 * SwipeConfirmComponent - A reusable slider button for confirmation actions
 * Features:
 * - Swipe to confirm gesture
 * - Touch and mouse support
 * - Visual feedback
 * - Animated return on incomplete swipe
 */
@Component({
  selector: 'app-swipe-confirm',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './swipe-confirm.component.html',
  styleUrls: ['./swipe-confirm.component.scss']
})
export class SwipeConfirmComponent {
  // Event emitter for when confirmation is successful
  @Output() confirmed = new EventEmitter<void>();
  
  // Reference to the sliding thumb element for DOM manipulation
  @ViewChild('sliderThumb') sliderThumb!: ElementRef;

  // Track the dragging state
  isDragging = false;
  // Store the initial X position when dragging starts
  startX = 0;
  // Current position of the slider thumb
  position = 0;
  // Track if slider has been confirmed
  isConfirmed = false;
  // Percentage of slide required for confirmation (65%)
  private readonly threshold = 0.65;

  /**
   * Handles the drag logic for both touch and mouse events
   * @param clientX - The current X position of the pointer/touch
   */
  private handleDrag(clientX: number) {
    if (this.isConfirmed) return;
    
    const track = this.sliderThumb.nativeElement.parentElement;
    // Calculate maximum slide distance accounting for thumb width
    const maxX = track.clientWidth - this.sliderThumb.nativeElement.clientWidth;
    
    // Update position while keeping it within bounds (0 to maxX)
    this.position = Math.max(0, Math.min(maxX, clientX - this.startX));

    // Check if threshold is met for confirmation
    if (this.position >= maxX * this.threshold) {
      this.position = maxX;
      this.isDragging = false;
      this.isConfirmed = true;
      this.confirmed.emit();
    }
  }

  /**
   * Handles mouse down event to start dragging
   */
  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.position;
    event.preventDefault();
  }

  /**
   * Handles touch start event to start dragging
   */
  startTouchDragging(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX - this.position;
    event.preventDefault();
  }

  /**
   * Handles mouse move event during drag
   */
  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    this.handleDrag(event.clientX);
  }

  /**
   * Handles touch move event during drag
   */
  onTouchDrag(event: TouchEvent) {
    if (!this.isDragging) return;
    this.handleDrag(event.touches[0].clientX);
    event.preventDefault();
  }

  /**
   * Handles the end of dragging (mouse up/touch end)
   * Returns slider to start if confirmation threshold wasn't met
   */
  stopDragging() {
    if (!this.isDragging) return;
    this.isDragging = false;

    // If not confirmed, animate back to start
    if (!this.isConfirmed) {
      this.sliderThumb.nativeElement.classList.add('returning');
      this.position = 0;
      // Remove animation class after transition completes
      setTimeout(() => {
        this.sliderThumb.nativeElement.classList.remove('returning');
      }, 300);
    }
  }
} 