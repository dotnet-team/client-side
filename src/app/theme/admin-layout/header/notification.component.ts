import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>notifications</mat-icon>
      <span class="badge bg-red-500">5</span>
    </button>

    <mat-menu #menu="matMenu">
      <mat-nav-list>
        <mat-list-item *ngFor="let message of messages">
          <a matLine href="#">{{ message }}</a>
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </mat-list-item>
      </mat-nav-list>
    </mat-menu>
  `,
})
export class NotificationComponent implements OnInit {
  messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
  constructor() {}

  ngOnInit() {}
}
