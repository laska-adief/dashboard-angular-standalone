import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { UserService } from '../../services/user.service';
import { NgClass } from '@angular/common';
import { ResponseUser } from '../../types/responseUser';

@Component({
  selector: 'dashboard-angular-standalone-user-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (resp) => {
        if (resp) {
          this.users = resp;
        }
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  handleDeleteUser(user: User) {
    this.userService.deleteUserById(user?.id).subscribe({
      next: (resp) => {
        console.log('resp', resp);
        alert(`User ${user.name} deleted`);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  handleEditUser(user: User) {
    this.userService.handleIsEdit();
    const tempUser: ResponseUser = {
      id: user?.id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
    };
    this.userService.handleEditedData(tempUser);
  }
}
