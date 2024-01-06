import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import * as  fromUsers from '../store/index'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit{
  users$: Observable<IUser[]> | undefined;
  isLoading$: Observable<boolean>|undefined;

  constructor(private store:Store<any>){}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }


  CreateUser(name: string): void {
    this.store.dispatch(fromUsers.createUsers({
        user: {
            id: Math.round(Math.random()),
            name
        }
    }));
}

UpdateUser(user: IUser): void {
    this.store.dispatch(fromUsers.updateUser({user}));
}

DeleteUser(user: IUser): void {
    this.store.dispatch(fromUsers.deleteUser({user}));
}


  private initDispatch(): void {
    this.store.dispatch(fromUsers.getUsers());
}

private initSubscriptions(): void {
    this.users$ = this.store.pipe(select(fromUsers.selectUsersList));
    this.isLoading$ = this.store.pipe(select(fromUsers.selectUserIsLoading));
}
}
