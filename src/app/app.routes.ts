import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];
