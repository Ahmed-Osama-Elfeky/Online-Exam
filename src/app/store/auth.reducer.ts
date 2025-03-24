import { createReducer, on } from '@ngrx/store';

import { User } from './user.model'; // Import the User model

import { updateUser } from './auth.action';

export interface AuthState {
  user: User| null;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }) => ({ ...state, user }))
);
