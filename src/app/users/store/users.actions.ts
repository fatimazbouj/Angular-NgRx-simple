import { createAction, props } from "@ngrx/store";
import { IUser } from "../interfaces/user.interface";

const prefix = '[Users]';

export const getUsers = createAction(`${prefix} Get users`);
export const getUsersSuccess = createAction(
    `${getUsers.type} Success`,
    props<{
        users: IUser[];
    }>()
);


export const createUsers = createAction(
  `${prefix} Create user`,
  props<{
      user: Partial<IUser>;
  }>()
);

export const createUserSuccess = createAction(
  `${createUsers.type} Success`,
  props<{
      user: IUser;
  }>()
);


export const updateUser = createAction(
  `${prefix} Update user`,
  props<{
      user: IUser;
  }>()
);

export const updateUserSuccess = createAction(
  `${updateUser.type} Success`,
  props<{
      user: IUser;
  }>()
);

export const deleteUser = createAction(
  `${prefix} Delete user`,
  props<{
      user: IUser;
  }>()
);
export const deleteUserSuccess = createAction(
  `${deleteUser.type} Success`,
  props<{
      user: IUser;
  }>()
);
