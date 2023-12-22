import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-angular-standalone-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, UserComponent, RouterModule],
})
export class DashboardComponent {}
