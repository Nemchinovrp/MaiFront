import {Component, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CurrencyService} from '../service/currency.service';
import {UserService} from '../service/user.service';
import {VacancyService} from '../service/vacancy.service';
import {ResumeService} from '../service/resume.service';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Resume} from '../model/Resume';
import {Dynamic} from '../model/Dynamic';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private resumes: Resume[];
  private dynamics: Dynamic[];


  constructor(private storage: StorageService, private currencyServiсe: CurrencyService,
              private userService: UserService, private vacancyService: VacancyService, private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.getAllVacancy();
    this.getAllResume();
  }

  getAllVacancy() {
    this.vacancyService.getVacancy().subscribe(
      vac => {
        this.resumes = vac;
        console.log(vac);
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllResume() {
    this.resumeService.getResume().subscribe(
      res => {
        this.dynamics = res;
        console.log(this.dynamics);
      },
      err => {
        console.log(err);
      }
    );
  }
}
