import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private key  = "Users"

  constructor() { }


  addUser(user: IUser) {
    let allusers : Array<any> = []
    if(localStorage.getItem(this.key) != null){
      allusers = JSON.parse(localStorage.getItem(this.key)!)
      allusers = [user , ...allusers]
    }
    else{
      allusers = [user]
    }

    localStorage.setItem(this.key, JSON.stringify(allusers))

  }
}
