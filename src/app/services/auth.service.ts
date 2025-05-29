import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

 /* login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${API_URL}/login`, credentials);
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${API_URL}/register`, data);
  }*/

register(data: any): Observable<any> {
  return this.http.post(`${API_URL}/register`, data);
}

login(data: any): Observable<any> {
  return this.http.post(`${API_URL}/login`, data);
}


}



/*login(email: string, password: string) {
  return this.http.post<{message: string, token: string, role: string}>('/auth/login', { email, password });
}

register(data: any) {
  return this.http.post<{message: string}>('/auth/register', data);
}*/