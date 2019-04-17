import { Component, OnInit, Input } from '@angular/core';
import { AsesorService } from '../shared/services/asesor.service';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {

  @Input() asesor: any = { id: null, nombre: "", especialidad: "" };
  asesorCreado: any;
  @Input() id_buscar_asesor: any;
  info_asesor: any;
  @Input() asesor_actualizar: any = { id: null, nombre: "", especialidad: "" };
  asesorActualizado: any;
  @Input() id_eliminar_asesor: any;
  asesorEliminado: any;
  info_asesor_text: string;

  constructor(private asesorSrv: AsesorService) { }

  ngOnInit() {
  }

  crearAsesor() {
    this.limpiarVista();
    console.log(this.asesor);
    this.asesorSrv.crearAsesor(this.asesor).subscribe((result: JSON) => {
      this.asesor = { id: null, nombre: "", direccion: "", telefono: "", ciudad: "" };
      this.asesorCreado = "Asesor creado exitosamente";
    },
      err => {
        this.asesor = { id: null, nombre: "", direccion: "", telefono: "", ciudad: "" };
        this.asesorCreado = "No se pudo crear el asesor";
      });
  }

  buscarAsesor() {
    this.limpiarVista();
    console.log(this.id_buscar_asesor);
    this.asesorSrv.consultarAsesor(this.id_buscar_asesor).subscribe((result: JSON) => {
      this.info_asesor = result;
      this.id_buscar_asesor = null;
    },
      err => {
        this.info_asesor_text = "Asesor no encontrado";
        this.id_buscar_asesor = null;
      });
  }

  actualizarAsesor() {
    this.limpiarVista();
    console.log(this.asesor_actualizar);
    this.asesorSrv.actualizarAsesor(this.asesor_actualizar).subscribe((result: JSON) => {
      this.asesor_actualizar = { id: null, nombre: "", especialidad: "" };
      this.asesorActualizado = "Asesor actualizado correctamente";
    },
      err => {
        this.asesorActualizado = "No se pudo actualizar el asesor";
        this.asesor_actualizar = { id: null, nombre: "", especialidad: "" };
      });
  }

  eliminarAsesor() {
    this.limpiarVista();
    console.log(this.id_buscar_asesor);
    this.asesorSrv.eliminarAsesor(this.id_eliminar_asesor).subscribe((result: JSON) => {
      this.asesorEliminado = "Asesor eliminado exitosamente";
      this.id_eliminar_asesor = null;
    },
      err => {
        this.asesorEliminado = "No se pudo eliminar el asesor";
        this.id_eliminar_asesor = null;
      });
  }

  limpiarVista() {
    this.asesorActualizado = null;
    this.asesorCreado = null;
    this.info_asesor = null;
    this.asesorEliminado = null;
    this.info_asesor_text = null;
  }
}
