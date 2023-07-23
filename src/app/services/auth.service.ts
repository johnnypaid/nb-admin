import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: any) {
    return this.httpClient.post(`${environment.api}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(`${environment.api}/login`, data);
  }
}
