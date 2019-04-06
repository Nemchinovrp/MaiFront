import {Component, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CurrencyService} from '../service/currency.service';
import {Currency} from '../model/currency';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Bet} from '../model/bet';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {takeWhile} from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nameUser: string;
  private currencies: Currency[];
  private users: User[];
  private currency: Currency;
  private bet: Bet;

  private alive: boolean;

  constructor(private storage: StorageService, private currencyServiсe: CurrencyService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.nameUser = this.storage.getToken();
    this.getAllCurrencies();
    this.alive = true;
    TimerObservable.create(0, 1000)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        this.userService.getAllUsers().subscribe(result => {
          this.users = result;
        });
      });
  }

  betMake() {
    alert('Сделать ставку');
  }

  getAllCurrencies() {
    this.currencyServiсe.findAll().subscribe(
      currs => {
        this.currencies = currs;
      },
      err => {
        console.log(err);
      }
    );
  }
}
