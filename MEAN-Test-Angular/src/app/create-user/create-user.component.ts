import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  mode = 'create';
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    phone: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit() {
    if(this.userService.getUserData()) {
      let userData = this.userService.getUserData();
      this.userForm.controls['firstname'].setValue(userData.firstname);
      this.userForm.controls['lastname'].setValue(userData.lastname);
      this.userForm.controls['phone'].setValue(userData.phone);
      this.userForm.controls['email'].setValue(userData.email);
      this.mode = 'update';
    }
  }

  onSubmit() {
    const user = {
      firstname: this.userForm.controls['firstname'].value,
      lastname: this.userForm.controls['lastname'].value,
      phone: this.userForm.controls['phone'].value,
      email: this.userForm.controls['email'].value
    }
    if(this.mode === 'create') {
      this.userService.createUser(user).subscribe(data => {
        this.router.navigate([''])
      })
    } else {
      this.userService.updateUser(user).subscribe(data => {
        this.router.navigate(['']);
      })
    }
  }
}
