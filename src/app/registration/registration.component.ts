import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;
  password: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  myEvent() {
    console.log(this.name + this.password);
    this.userService.getUser().subscribe(
      user => {
        if(this.name === user.valueOf().name && this.password === user.valueOf().password) {
          this.router.navigate(['main']);
        } else {
          alert('Неправильный логин или пароль');
        }
        console.log(user);
      },
      err => {
        console.log(err);
      }
    );
    // alert('HEllo --  ' + this.name);

  }
}
