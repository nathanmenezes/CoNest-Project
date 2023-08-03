import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  url:string = "http://localhost:5000"

  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.url}/api/v1/auth/signup`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/api/v1/auth/signin`, user);
  }
}
