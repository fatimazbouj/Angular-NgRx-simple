import { Action, createReducer, on } from "@ngrx/store";
import { IUserState } from "../interfaces/user-state.interface";
import * as fromUsers from './index';
import { state } from "@angular/animations";
import { Actions } from "@ngrx/effects";

const initialUsersState: IUserState = {
  users: [],
  isLoading: false
}

const reducer = createReducer(
  initialUsersState,
  on(
    fromUsers.getUsers,
    (state) => {
      return {
        ...state,
        isLoading: true
      };
    }
  ),

  on(
    fromUsers.getUsersSuccess,
    (state, { users }) => {
      return {
        ...state,
        isLoading: false,
        users: users
      };
    }
  ),
  on(
    fromUsers.createUsers,(state)=>{
      return{
        ...state,
        isLoading:true
      }
    }
  ),
  on(
    fromUsers.createUserSuccess,(state,{user})=>{
      return{
        ...state,
        users:[...state.users,user],
        isLoading:false
      }
    }
  ),
  on(
    fromUsers.updateUser,(state)=>{
      return{
        ...state,
        isLoading:true,
      }
    }
  ),
  on(fromUsers.updateUserSuccess,(state , { user })=>{
    return{
      ...state,
      users: state.users.map((e)=> e.id=== user.id?user:e),
      isLoading:false
    }
  }
),
on(
  fromUsers.deleteUser,(state)=>{
    return{
      ...state,
      isLoading:true,
    }
  }
),
on(
  fromUsers.deleteUserSuccess,(state,{ user })=>{
    return{
      ...state,
      users:state.users.filter(e=>e.id!==user.id),
      isLoading:false
    }
  }
)
);

export function usersReducer(state=initialUsersState,action: Action):IUserState{
  return reducer(state,action);
}
