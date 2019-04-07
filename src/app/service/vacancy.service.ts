import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VacancyService {

  constructor(private http: HttpClient) { }

  getVacancy(): Observable<any> {
    return this.http.get('http://localhost:8080/resume_all');
  }
}
