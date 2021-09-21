import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGood } from 'src/app/redux/models/details.model';
import { IRegisterUserData, IUserInitialState } from 'src/app/redux/models/user.model';
import { SERVER_ADDRESS } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData: IUserInitialState = {} as IUserInitialState;
  flag = new Observable<boolean>((subscriber) => {
    if (localStorage.getItem('user')) {
      subscriber.next(true);
    } else {
      subscriber.next(false);
    }
  });

  constructor(private http: HttpClient) {}

  addUser(
    firstname: string,
    lastname: string,
    cart: string[],
    favorites: IGood[],
    orders: IGood[],
    token: string,
  ) {
    if (firstname || lastname) {
      this.userData.firstName = firstname;
      this.userData.lastName = lastname;
      this.userData.cart = cart;
      this.userData.favorites = favorites;
      this.userData.orders = orders;
      this.userData.token = token;
      localStorage.setItem('user', JSON.stringify(this.userData));
      window.location.reload();
    }
  }

  getUsername() {
    const getUser: string | null = localStorage.getItem('user');
    return getUser !== null ? JSON.parse(getUser) : null;
  }

  rmUser() {
    localStorage.clear();
  }

  addUserCartItem(itemId: string) {
    const user = this.getUsername();
    user.cart.push(itemId);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getFlag() {
    return this.flag;
  }

  sendUserLoginReq(login: string, password: string) {
    return this.http.post<{ token: string }>(`${SERVER_ADDRESS}/users/login`, {
      login: login,
      password: password,
    });
  }

  sendGetUserDataReq(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IUserInitialState>(`${SERVER_ADDRESS}/users/userInfo`, {
      headers: headers,
    });
  }

  sendRegisterUserReq(userData: IRegisterUserData) {
    return this.http.post<{ token: string }>(`${SERVER_ADDRESS}/users/register`, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      login: userData.login,
      password: userData.password,
    });
  }

  sendAddToCartReq(id: string) {
    console.log('token', this.getUsername().token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getUsername().token}`,
    });

    return this.http.post(
      `${SERVER_ADDRESS}/users/cart`,
      { id: id },
      {
        headers: headers,
      },
    );
  }
}
