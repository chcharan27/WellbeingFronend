import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7094/api/Auth'; // Your actual backend URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getusers`);
  }
}
