import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResumeService {

  constructor(private http: HttpClient) {}

  getResume(): Observable<any> {
    return this.http.get('http://localhost:8080/resume/all');
  }
}
