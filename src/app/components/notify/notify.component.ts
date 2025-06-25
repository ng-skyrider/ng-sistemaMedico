import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type NotifyType = 'success' | 'alert' | 'danger';

@Component({
  selector: 'app-notify',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnChanges, OnDestroy {
  @Input() message: string = '';
  @Input() type: NotifyType = 'success';
  @Input() show: boolean = false;
  @Input() duration: number = 7000; // Auto-close after 7 seconds

  @Output() closed = new EventEmitter<void>();

  private closeTimeout?: ReturnType<typeof setTimeout>;

  ngOnChanges(changes: SimpleChanges): void {
    // When the notification is shown, start a timer to close it.
    // If it's hidden (e.g., manually closed), the timer is cleared.
    if (changes['show']) {
      if (this.show) {
        this.startCloseTimer();
      } else {
        this.clearCloseTimer();
      }
    }
  }

  ngOnDestroy(): void {
    // Ensure the timer is cleared when the component is destroyed to prevent memory leaks.
    this.clearCloseTimer();
  }

  private startCloseTimer(): void {
    this.clearCloseTimer(); // Prevent multiple timers running simultaneously
    this.closeTimeout = setTimeout(() => {
      this.onClose();
    }, this.duration);
  }

  private clearCloseTimer(): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = undefined;
    }
  }

  onClose(): void {
    this.closed.emit();
  }
}
