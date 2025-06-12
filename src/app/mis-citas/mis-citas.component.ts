import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent implements OnInit {
  citas: any[] = [];
  mensaje = '';
  email = ''; // Puedes obtenerlo del usuario logueado

  constructor(private citaService: CitaService) {}

  ngOnInit() {
    // Aquí deberías obtener el email del usuario logueado
    this.email = localStorage.getItem('email') || '';
    this.cargarCitas();
  }

  cargarCitas() {
    this.citaService.getCitasPorUsuario(this.email).subscribe(data => this.citas = data);
  }

  
  
  cancelarCita(id: number) {
    if (confirm('¿Seguro que deseas cancelar esta cita?')) {
      this.citaService.cancelarCita(id).subscribe({
        next: () => {
          this.mensaje = 'Cita cancelada correctamente';
          this.cargarCitas();
        },
        error: err => this.mensaje = err.error?.message || 'Error al cancelar'
      });
    }
  }
}