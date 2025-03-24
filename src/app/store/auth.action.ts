import { createAction, props } from '@ngrx/store';
import { User } from './user.model';  // Assuming you have a User model

export const updateUser = createAction(
  '[Auth] Update User',
  props<{ user: User }>()
);
