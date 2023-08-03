import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OngService {
  url:string = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  saveOng(ong: any): Observable<any>{
    return this.http.post<any>(`${this.url}/api/v1/ong`, ong);
  }
}
