import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@Component({
  selector: 'dashboard-angular-standalone-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [CommonModule, UserListComponent, UserInputComponent],
})
export class UsersComponent {}
