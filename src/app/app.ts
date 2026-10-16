import { Component } from '@angular/core';
import { RegistroReactivoComponent } from './registro-reactivo/registro-reactivo'; // Importa el componente reactivo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroReactivoComponent], // Reemplaza RegistroComponent por RegistroReactivoComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'practica-formularios';
}