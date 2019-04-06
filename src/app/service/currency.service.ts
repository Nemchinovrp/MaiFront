import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Currency} from '../model/currency';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CurrencyService {
  private apiUrl = 'http://localhost:8230/currency/all';

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  findAll(): Observable<any>  {
    return this.http.get(this.apiUrl);
  }
}
