import { AppComponent } from './app.component';
import { CambiarTextoDirective } from './shared/directives/cambiar-texto.directive';
import { AlcuadradoPipe } from './shared/pipes/alcuadrado.pipe';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MostrarAsesoresComponent } from './mostrar-asesores/mostrar-asesores.component';
import { AppRoutingModule } from './app-routing.module';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { FormatoTarjetaPipe } from './shared/pipes/formato-tarjeta.pipe';
import { HistorialComponent } from './historial/historial.component';
import { MostrarClientesRoutingModule } from './mostrar-clientes/mostrar-clientes-routing.module';
import { FormatoFechaPipe } from './shared/pipes/formato-fecha.pipe';
import { ClienteComponent } from './cliente/cliente.component';
import { AsesorComponent } from './asesor/asesor.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MostrarClientesComponent,
    CambiarTextoDirective,
    AlcuadradoPipe,
    MostrarAsesoresComponent,
    FormatoTarjetaPipe,
    HistorialComponent,
    FormatoFechaPipe,
    ClienteComponent,
    AsesorComponent,
    ConsumoComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MostrarClientesRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
