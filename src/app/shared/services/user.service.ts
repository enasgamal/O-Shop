import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFiredb: AngularFireDatabase) { }
  save(user:firebase.User){
    this.angularFiredb.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
}
