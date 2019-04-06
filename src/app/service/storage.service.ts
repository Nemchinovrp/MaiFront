import {Injectable} from '@angular/core';
const TOKEN_KEY = 'UserName';


@Injectable()
export class StorageService {

  constructor() { }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

}
