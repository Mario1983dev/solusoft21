import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  template: `
    <div class="page-content">
      <h1>Quiénes Somos</h1>

      <p>
        En SoluSoft somos una empresa dedicada al desarrollo de software a medida,
        enfocada en crear soluciones tecnológicas eficientes y adaptadas a las
        necesidades de cada cliente.
      </p>

      <h2>Nuestra Misión</h2>
      <p>
        Desarrollar soluciones tecnológicas modernas, accesibles y confiables que
        ayuden a las personas y empresas a digitalizar sus procesos y alcanzar todo
        su potencial.
      </p>

      <h2>Nuestra Visión</h2>
      <p>
        Ser una empresa reconocida por la calidad, innovación y cercanía con
        nuestros clientes, contribuyendo al desarrollo tecnológico del país.
      </p>

      <h2>Valores</h2>
      <ul style="text-align: left; display: inline-block;">
        <li>Compromiso con cada proyecto</li>
        <li>Calidad y excelencia en el servicio</li>
        <li>Innovación constante</li>
      </ul>
    </div>
  `,
  styleUrls: ['./quienes-somos.css']
})
export class QuienesSomosComponent {}
