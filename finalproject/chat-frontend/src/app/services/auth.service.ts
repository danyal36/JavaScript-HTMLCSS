import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
   BACK_END = 'http://localhost:3030/auth/';
  constructor(private http: HttpClient) { }
  register(data: any): Observable<any> {
    return this.http.post<any>(this.BACK_END + 'register', data) 
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(this.BACK_END + 'login', data) 
  }
}
