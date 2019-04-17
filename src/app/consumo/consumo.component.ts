import { Component, OnInit, Input } from '@angular/core';
import { ConsumoService } from '../shared/services/consumo.service';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  @Input() consumo: any = { id: null, descripcion: "", monto: "", fecha: "" };
  @Input() id_tarjeta: any;
  consumoCreado: any;
  @Input() id_buscar_consumo: any;
  info_consumo: any;
  @Input() consumo_actualizar: any = { id: null, descripcion: "", monto: "", fecha: "" };
  consumoActualizado: any;
  @Input() id_eliminar_consumo: any;
  consumoEliminado: any;
  info_consumo_text: string;

  constructor(private consumoSrv: ConsumoService) { }

  ngOnInit() {
  }

  crearConsumo() {
    this.limpiarVista();
    console.log(this.consumo);
    this.consumoSrv.crearConsumo(this.consumo, this.id_tarjeta).subscribe((result: JSON) => {
      this.consumo = { id: null, descripcion: "", monto: "", fecha: "" };
      this.consumoCreado = "Consumo creado exitosamente";
      this.id_tarjeta = null;
    },
      err => {
        this.consumo = { id: null, descripcion: "", monto: "", fecha: "" };
        this.consumoCreado = "No se pudo crear el consumo";
        this.id_tarjeta = null;
      });
  }

  buscarConsumo() {
    this.limpiarVista();
    console.log(this.id_buscar_consumo);
    this.consumoSrv.consultarConsumo(this.id_buscar_consumo).subscribe((result: JSON) => {
      this.info_consumo = result;
      this.id_buscar_consumo = null;
    },
      err => {
        this.info_consumo_text = "Consumo no encontrado";
        this.id_buscar_consumo = null;
      });
  }

  actualizarConsumo() {
    this.limpiarVista();
    console.log(this.consumo_actualizar);
    this.consumoSrv.actualizarConsumo(this.consumo_actualizar).subscribe((result: JSON) => {
      this.consumo_actualizar = { id: null, descripcion: "", monto: "", fecha: "" };
      this.consumoActualizado = "Consumo actualizado exitosamente";
    },
      err => {
        this.consumo_actualizar = { id: null, descripcion: "", monto: "", fecha: "" };
        this.consumoActualizado = "No se pudo actualizar el consumo";
      });
  }

  eliminarConsumo() {
    this.limpiarVista();
    console.log(this.id_eliminar_consumo);
    this.consumoSrv.eliminarConsumo(this.id_eliminar_consumo).subscribe((result: JSON) => {
      this.consumoEliminado = "Consumo eliminado exitosamente";
      this.id_eliminar_consumo = null;
    },
      err => {
        this.consumoEliminado = "No se pudo eliminar el consumo";
        this.id_eliminar_consumo = null;
      });
  }

  limpiarVista() {
    this.info_consumo_text = null;
    this.consumoCreado = null,
      this.info_consumo = null;
    this.consumoActualizado = null;
    this.consumoEliminado = null;
  }

}
