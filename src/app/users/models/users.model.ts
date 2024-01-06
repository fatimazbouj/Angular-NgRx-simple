import { IUser } from "../interfaces/user.interface";

export class UserModel implements IUser{
  id?: number | undefined;
  name: string;
  phone: string;
  address: string;
  gender: "Male" | "Female";

  constructor(data:IUser){

    this.id=data.id;
    this.name=data.name;
    this.phone=data.phone;
    this.address=data.address;
    this.gender=data.gender;
  }

}
