import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData: IUser = {} as IUser;
  flag = new Observable<boolean>((subscriber) => {
    if (localStorage.getItem('user')) {
      subscriber.next(true);
    } else {
      subscriber.next(false);
    }
  });

  addUser(name: string, email: string, password: string, avatar: string) {
    this.userData.name = name;
    this.userData.email = email;
    this.userData.password = password;
    this.userData.avatar = avatar;
    localStorage.setItem('user', JSON.stringify(this.userData));
  }

  getUsername() {
    const getUser: string | null = localStorage.getItem('user');
    console.log('getUSer', getUser ? JSON.parse(getUser) : null);
    return getUser !== null ? JSON.parse(getUser) : null;
  }

  rmUser() {
    localStorage.clear();
  }

  getFlag() {
    return this.flag;
  }
}
