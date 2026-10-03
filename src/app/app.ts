import { Component } from '@angular/core';
import { RegistroComponent } from './registro/registro'; // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroComponent], // Reemplaza RouterOutlet por RegistroComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'practica-formularios';
}