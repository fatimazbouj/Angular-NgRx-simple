import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import * as fromUsers from './index';
import { map, switchMap } from "rxjs";
import { IUser } from "../interfaces/user.interface";

@Injectable()
export class UsersEffects{

  constructor(private readonly actions$:Actions,private readonly UserService:UserService){}

  //get users
  getUsers$=createEffect(()=>
    this.actions$.pipe(
      ofType(fromUsers.getUsers.type),
      switchMap(()=>this.UserService.getUsers()),
      map((users:IUser[])=>fromUsers.getUsersSuccess({users}))
    )
  )

  //create users

  createUser$=createEffect(()=>
      this.actions$.pipe(
        ofType(fromUsers.createUsers.type),
        switchMap(({user})=>this.UserService.addUser(user) ),
        map((user:IUser)=>fromUsers.createUserSuccess({user}))
      )
  )

  //update users

  updateUser$=createEffect(()=>
        this.actions$.pipe(
          ofType(fromUsers.updateUser.type),
          switchMap(({user})=>this.UserService.undateUser(user)),
          map((user)=>fromUsers.updateUserSuccess({user}))
        )
  )

  //delete user

  deleteUser$=createEffect(()=>
          this.actions$.pipe(
            ofType(fromUsers.deleteUser.type),
            switchMap(({user})=>this.UserService.deleteUser(user)),
            map((user)=>fromUsers.deleteUserSuccess({user}))
          )
  )
}
