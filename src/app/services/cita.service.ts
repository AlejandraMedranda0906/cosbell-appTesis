import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/citas'; // Cambia el puerto si tu backend usa otro

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  constructor(private http: HttpClient) {}

  agendarCita(data: { servicioId: number, fecha: string, hora: string, email: string }): Observable<any> {
    return this.http.post(API_URL, data);
  }

  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  getCitasPorUsuario(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/mis-citas?email=${email}`);
  }

  cancelarCita(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}