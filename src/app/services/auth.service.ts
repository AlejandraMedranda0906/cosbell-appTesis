import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${API_URL}/register`, data);
  }

  login(data: { email: string, password: string }): Observable<{ token: string, role: string }> {
    return this.http.post<{ token: string, role: string }>(`${API_URL}/login`, data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}

/*login(email: string, password: string) {
  return this.http.post<{message: string, token: string, role: string}>('/auth/login', { email, password });
}

register(data: any) {
  return this.http.post<{message: string}>('/auth/register', data);
}*/