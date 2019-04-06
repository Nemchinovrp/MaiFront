import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '../service/storage.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;

  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit() {
  }

  myEvent() {
    // alert('HEllo --  ' + this.name);
    this.router.navigate(['main']);
    this.storage.saveToken(this.name);
  }
}
