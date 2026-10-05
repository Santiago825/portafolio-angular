import { Routes } from '@angular/router';

/**
 * Todas las páginas se cargan en diferido (lazy): el bundle inicial solo trae el shell.
 * `title` actualiza el <title> del documento en cada ruta.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Santiago Orjuela · Web Developer',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About · Santiago Orjuela',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'experience' },
      {
        path: 'education',
        loadComponent: () =>
          import('./pages/about/education/education').then((m) => m.Education),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./pages/about/experience/experience').then((m) => m.Experience),
      },
      {
        path: 'certifications',
        loadComponent: () =>
          import('./pages/about/certifications/certifications').then((m) => m.Certifications),
      },
      {
        path: 'complementary',
        loadComponent: () =>
          import('./pages/about/complementary/complementary').then((m) => m.Complementary),
      },
    ],
  },
  {
    path: 'portfolio',
    title: 'Portfolio · Santiago Orjuela',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'projects' },
      {
        path: 'projects',
        loadComponent: () => import('./pages/portfolio/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'skills',
        loadComponent: () => import('./pages/portfolio/skills/skills').then((m) => m.Skills),
      },
    ],
  },
  {
    path: 'contact',
    title: 'Contact · Santiago Orjuela',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  // Compatibilidad con el enlace antiguo del sitio en React (/portafolio).
  { path: 'portafolio', redirectTo: 'portfolio' },
  {
    path: '**',
    title: 'Page not found · Santiago Orjuela',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
