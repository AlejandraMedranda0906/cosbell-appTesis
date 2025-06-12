import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';
import { CitaService } from '../services/cita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css'],
  imports: [CommonModule, ReactiveFormsModule]

})
export class AgendarCitaComponent implements OnInit {

  formCita: any;
  servicios: any[] = [];
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private citaService: CitaService
  ) {
    // Inicializa el formulario en el constructor
    this.formCita = this.fb.group({
      servicioId: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.servicioService.getServicios().subscribe(data => this.servicios = data);
  }

  agendarCita() {
    if (this.formCita.invalid) return;

    const formValue = this.formCita.value;
    const data = {
      servicioId: Number(formValue.servicioId),
      fecha: formValue.fecha,
      hora: formValue.hora,
      email: formValue.email
    };

    this.citaService.agendarCita(data).subscribe({
      next: res => {
        this.mensaje = 'Cita agendada correctamente';
        this.formCita.reset();
      },
      error: err => this.mensaje = err.error?.message || 'Error al agendar'
    });
  }
}