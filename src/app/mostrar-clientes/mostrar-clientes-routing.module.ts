import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarClientesComponent } from './mostrar-clientes.component';
import { HistorialComponent } from '../historial/historial.component';


const routes: Routes = [
  {
    path: 'clientes', component: MostrarClientesComponent,
    children: [
      { path: 'historial/:cardNumber', redirectTo: '/historial/:cardNumber', pathMatch: 'full' },
      { path: 'historial/:cardNumber', component: HistorialComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MostrarClientesRoutingModule {
}