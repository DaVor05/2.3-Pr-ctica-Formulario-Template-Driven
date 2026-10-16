import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-reactivo.html',
  styleUrl: './registro-reactivo.css'
})
export class RegistroReactivoComponent {
  // Definición del FormGroup con sus FormControl y Validators
  formRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  datosRegistrados: any = null;

  // Método para obtener los controles de forma más limpia en el HTML
  get f() {
    return this.formRegistro.controls;
  }

  onSubmit() {
    if (this.formRegistro.valid) {
      this.datosRegistrados = this.formRegistro.value;
      console.log('Datos del Formulario Reactivo:', this.formRegistro.value);
    }
  }
}