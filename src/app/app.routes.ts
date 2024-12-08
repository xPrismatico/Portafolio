import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'home', // Nombre de ruta
    pathMatch: 'full', // Me redirija a Home con cualquier cosa
    // Donde está el Componente
    loadComponent: () => import('./portfolio/pages/portfolio-home/portfolio-home.component').then(m => m.PortfolioHomeComponent)
  },
  // VALIDAR RUTAS
  {
    path: '**', // Cualquier caso que no sea home en el url
    pathMatch: 'full', // Me redirija a Home con cualquier cosa
    redirectTo: 'home' // Redirigir a home
  }
];

