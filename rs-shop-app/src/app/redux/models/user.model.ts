import { IGood } from './details.model';

export interface IUserInitialState {
  firstName: string;
  lastName: string;
  cart: string[];
  favorites: IGood[];
  orders: IGood[];
  token: string;
}

export interface IRegisterUserData {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}
