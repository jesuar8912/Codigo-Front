import { Component, OnInit, Input } from '@angular/core';
import { TarjetaService } from '../shared/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() tarjeta: any = { id: null, numero: "", ccv: "", tipo: "" };
  @Input() id_cliente: any;
  tarjetaCreado: any;
  @Input() id_buscar_tarjeta: any;
  info_tarjeta: any;
  @Input() tarjeta_actualizar: any = { id: null, numero: "", ccv: "", tipo: "" };
  tarjetaActualizado: any;
  @Input() id_eliminar_tarjeta: any;
  tarjetaEliminado: any;
  info_tarjeta_text: string;
  constructor(private tarjetaSrv: TarjetaService) { }

  ngOnInit() {
  }

  buscarTarjeta() {
    this.limpiarVista();
    console.log(this.id_buscar_tarjeta);
    this.tarjetaSrv.consultarTarjeta(this.id_buscar_tarjeta).subscribe((result: JSON) => {
      this.info_tarjeta = result;
      this.id_buscar_tarjeta = null;
    },
      err => {
        this.info_tarjeta_text = "Tarjeta no encontrada";
        this.id_buscar_tarjeta = null;
      });
  }

  actualizarTarjeta() {
    this.limpiarVista();
    console.log(this.tarjeta_actualizar);
    this.tarjetaSrv.actualizarTarjeta(this.tarjeta_actualizar).subscribe((result: JSON) => {
      this.tarjeta_actualizar = { id: null, numero: "", ccv: "", tipo: "" };
      this.tarjetaActualizado = "Tarjeta actualizada exitosamente";
    },
      err => {
        this.tarjeta_actualizar = { id: null, numero: "", ccv: "", tipo: "" };
        this.tarjetaActualizado = "No se pudo actualizar la tarjeta";
      });
  }

  eliminarTarjeta() {
    this.limpiarVista();
    console.log(this.id_eliminar_tarjeta);
    this.tarjetaSrv.eliminarTarjeta(this.id_eliminar_tarjeta).subscribe((result: JSON) => {
      this.tarjetaEliminado = "Tarjeta eliminada exitosamente";
      this.id_eliminar_tarjeta = null;
    },
      err => {
        this.tarjetaEliminado = "No se pudo eliminar la tarjeta";
        this.id_eliminar_tarjeta = null;
      });
  }

  crearTarjetaCliente() {
    this.limpiarVista();
    console.log(this.tarjeta);
    this.tarjetaSrv.crearTarjetaCliente(this.tarjeta, this.id_cliente).subscribe((result: JSON) => {
      this.tarjeta = { id: null, numero: "", ccv: "", tipo: "" };
      this.id_cliente = null;
      this.tarjetaCreado = "Tarjeta creada exitosamente";
    },
      err => {
        this.tarjetaCreado = "No se pudo crear la tarjeta";
        this.id_cliente = null;
      });
  }

  limpiarVista() {
    this.info_tarjeta_text = null;
    this.tarjetaCreado = null;
    this.info_tarjeta = null;
    this.tarjetaActualizado = null;
    this.tarjetaEliminado = null;
  }
}
