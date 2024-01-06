import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:IUser[]=[];

  constructor() {

    this.users=[
      {
        id:Math.round(Math.random()),
        name:"Nourddine",
        phone:"0698095434",
        address:"Bengarrir",
        gender:"Male",
      },
      {
        id:Math.round(Math.random()),
        name:"Anas",
        phone:"06986435674",
        address:"Bengarrir",
        gender:"Male",
      },
    ]
  }

  getUsers():Observable<IUser[]>{
    return of(this.users) ;
  }

  addUser(user:IUser){
      this.users=[
      ...this.users,
      user
    ]
    return of(user);

  }

  undateUser(user:IUser){
    this.users.map(e => e.id === user.id ? user : e);
    return of(user);
  }

  deleteUser(user:IUser){
    this.users.filter(e=> e.id!==user.id);
    return of(user);
  }
}
