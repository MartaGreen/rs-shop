import { IGood } from './details.model';

export interface IUserInitialState {
  firstName: string;
  lastName: string;
  cart: IGood[];
  favorites: IGood[];
  orders: IGood[];
  token: string;
}
