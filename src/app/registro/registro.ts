import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',  // Cambiado de ./registro.component.html a ./registro.html
  styleUrl: './registro.css'       // Cambiado de ./registro.component.css a ./registro.css
})
export class RegistroComponent {
  usuario = {
    nombreCompleto: '',
    email: '',
    telefono: '',
    edad: null,
    password: '',
    confirmarPassword: ''
  };

  datosRegistrados: any = null;

  onRegistrar() {
    this.datosRegistrados = { ...this.usuario };
  }
}