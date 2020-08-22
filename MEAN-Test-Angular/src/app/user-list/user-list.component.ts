import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any[] = null;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserServiceService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  addNewUser() {
    this.userService.setUserData(null);
    this.router.navigate(['userinfo']);
  }
  updateUser(user) {
    this.userService.setUserData(user);
    this.router.navigate(['userinfo']);
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(data=> {
      this.getAllUsers();
    })
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.userList = data.result;
    })
  }
}
