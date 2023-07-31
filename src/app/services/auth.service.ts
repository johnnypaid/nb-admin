import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: any): Observable<User> {
    return this.httpClient.post<User>(`${environment.api}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(`${environment.api}/login`, data);
  }

  user(): Observable<User> {
    return this.httpClient.get<User>(`${environment.api}/user`);
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${environment.api}/logout`, {});
  }

  updateInfo(data: any): Observable<User> {
    return this.httpClient.put<User>(`${environment.api}/users/info`, data);
  }

  updatePassword(data: any): Observable<User> {
    return this.httpClient.put<User>(`${environment.api}/users/info`, data);
  }
}
