import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit() {
    this.servicioService.getServicios().subscribe(data => {
      this.servicios = data;
    });
  }
}