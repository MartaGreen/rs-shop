import { createReducer, on } from '@ngrx/store';
import * as detailsActions from '../actions/details.action';
import { IDetails, IGood } from '../models/details.model';

export const detailsInitialState: IDetails = {} as IDetails;

export const detailsReducer = createReducer(
  detailsInitialState,
  on(detailsActions.detailsAction, (state) => ({
    ...state,
  })),
  on(detailsActions.detailsSuccessAction, (state, { detailsData }) => ({
    ...state,
    detailsData: detailsData,
  })),
  on(detailsActions.detailsAction, (state) => ({
    ...state,
  })),
  on(detailsActions.clearDetails, (state) => ({
    ...state,
    detailsData: {} as IGood,
  })),
);
