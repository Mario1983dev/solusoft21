import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 🔴 ESTO ES LO QUE FALTABA
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
