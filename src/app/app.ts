
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
      <a routerLink="/quienes-somos" routerLinkActive="active">Quiénes Somos</a>
      <a routerLink="/contacto" routerLinkActive="active">Contáctenos</a>
    </nav>

    <router-outlet></router-outlet>

    <footer>
      © 2025 SoluSoft - Todos los derechos reservados
    </footer>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {}
