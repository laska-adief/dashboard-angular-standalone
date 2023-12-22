import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'modules/users/src/lib/users/services/user.service';

@Component({
  selector: 'dashboard-angular-standalone-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  countUser: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.userService.getUsers().subscribe({
      next: (resp) => {
        if (resp) {
          this.countUser = resp.length;
        }
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
