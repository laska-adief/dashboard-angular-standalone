import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { ResponseUser } from '../types/responseUser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  private isEdit = new BehaviorSubject<boolean>(false);
  isEdit$ = this.isEdit.asObservable();
  private editedData = new BehaviorSubject<ResponseUser | null>(null);
  editedData$ = this.editedData.asObservable();

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUsersById(id: number) {
    return this.http.get(this.apiUrl + `/${id}`);
  }

  createUser(user: ResponseUser) {
    return this.http.post<ResponseUser>(this.apiUrl, user);
  }

  updateUser(user: ResponseUser) {
    return this.http.patch<ResponseUser>(this.apiUrl + `/${user.id}`, user);
  }

  deleteUserById(id: number) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }

  handleIsEdit() {
    this.isEdit.next(true);
  }

  handleEditedData(user: ResponseUser) {
    this.editedData.next(user);
  }
}
