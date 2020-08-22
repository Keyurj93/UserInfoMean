import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userData: any = {};
  constructor(private http: HttpClient,) { }

  setUserData(user: any) {
    this.userData = user;
  }
  getUserData() {
    return this.userData;
  }

  createUser(user) {
   return this.http.post('http://localhost:5000/users/create', user);
  }

  updateUser(user) {
    return this.http.put('http://localhost:5000/users/update', user);
   }

   getAllUsers() {
    return this.http.get('http://localhost:5000/users'); 
   }

   deleteUser(user) {
    return this.http.put('http://localhost:5000/users/delete', user); 
   }
}
