import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarAsesoresComponent } from './mostrar-asesores/mostrar-asesores.component';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { HistorialComponent } from './historial/historial.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AsesorComponent } from './asesor/asesor.component';
import { ConsumoComponent } from './consumo/consumo.component';

const routes: Routes = [
  { path: 'clientes', component: MostrarClientesComponent },
  { path: 'asesores', component: MostrarAsesoresComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'asesor', component: AsesorComponent },
  { path: 'consumo', component: ConsumoComponent },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'historial/:cardNumber', component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
