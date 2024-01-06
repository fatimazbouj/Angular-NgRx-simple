import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUserState } from '../interfaces/user-state.interface';

export const selectUserState = createFeatureSelector<IUserState>('user');
export const selectUsersList = createSelector(
  selectUserState,
  (state: IUserState) => state.users
);
export const selectUserIsLoading = createSelector(
  selectUserState,
  (state: IUserState) => state.isLoading
);
