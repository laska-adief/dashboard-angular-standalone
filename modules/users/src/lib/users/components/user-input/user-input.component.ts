import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ResponseUser } from '../../types/responseUser';

@Component({
  selector: 'dashboard-angular-standalone-user-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent implements OnInit {
  userForm!: FormGroup;
  isEdited: boolean = false;
  editedUser: ResponseUser | null = null;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.initForm();
    this.getEdited();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    const tempUser = this.userForm.value;
    if (this.userForm.valid) {
      if (this.isEdited) {
        if (this.editedUser) {
          this.updateUser(this.editedUser);
        }
      } else {
        this.createUser(tempUser);
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  createUser(user: ResponseUser) {
    this.userService.createUser(user).subscribe({
      next: (resp) => {
        alert(`User ${resp.name} added`);
        this.userForm.reset();
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  updateUser(user: ResponseUser) {
    this.userService.updateUser(user).subscribe({
      next: (resp) => {
        alert(`User ${resp.name} updated`);
        this.userForm.reset();
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  getEdited() {
    this.userService.isEdit$.subscribe({
      next: (resp) => {
        this.isEdited = resp;
      },
      error: (err) => {
        console.log('error', err);
      },
    });

    this.userService.editedData$.subscribe({
      next: (resp) => {
        if (this.isEdited) {
          this.editedUser = resp;
          this.userForm.get('name')?.setValue(this.editedUser?.name);
          this.userForm.get('username')?.setValue(this.editedUser?.username);
          this.userForm.get('email')?.setValue(this.editedUser?.email);
        }
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
