import { ActionReducerMap } from '@ngrx/store';
import { IRegisterReducers } from '../models/register-reducers.model';
import { LOCATION_KEY } from '../selectors/action.selector';
import { locationReducer } from './location.reducer';

export const reducers: ActionReducerMap<IRegisterReducers> = {
  [LOCATION_KEY]: locationReducer,
};
