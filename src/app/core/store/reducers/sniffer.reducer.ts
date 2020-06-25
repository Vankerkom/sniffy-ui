import { Action, createReducer, on } from '@ngrx/store';
import * as SnifferActions from '../actions/sniffer.actions';

export const snifferFeatureKey = 'sniffer';

export interface State {
  active: boolean;
}

export const initialState: State = {
  active: false,
};

export const reducer = createReducer(
  initialState,

  on(SnifferActions.loadStateSuccess, (state, { payload }) => ({
    ...state,
    active: payload.active,
  }))
);
