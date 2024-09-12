import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
