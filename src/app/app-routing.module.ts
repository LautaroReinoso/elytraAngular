import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Otras rutas de tu aplicación
/*   { path: '/all-projects', component:Component}, */
  
  // Ruta comodín para manejo de error 404
  { path: '**', component:Component}  // Esto capturará todas las rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }