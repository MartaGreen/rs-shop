import { LOCATION_KEY } from '../selectors/action.selector';
import { ILocation } from './location';

export interface IRegisterReducers {
  [LOCATION_KEY]: ILocation;
}
