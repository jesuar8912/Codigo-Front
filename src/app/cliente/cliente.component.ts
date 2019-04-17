import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../shared/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() usuario: any = { id: null, nombre: "", direccion: "", ciudad: "", telefono: "" };
  usuarioCreado: any;
  @Input() id_buscar_usuario: any;
  info_usuario: any;
  @Input() usuario_actualizar: any = { id: null, nombre: "", direccion: "", ciudad: "", telefono: "" };
  usuarioActualizado: any;
  @Input() id_eliminar_usuario: any;
  usuarioEliminado: any;
  info_usuario_text: string;

  constructor(private clienteSrv: ClienteService) { }

  ngOnInit() {
  }

  crearUsuario() {
    this.limpiarVista();
    console.log(this.usuario);
    this.clienteSrv.crearCliente(this.usuario).subscribe((result: JSON) => {
      this.usuario = { id: null, nombre: "", direccion: "", telefono: "", ciudad: "" };
      this.usuarioCreado = "Cliente creado exitosamente";
    },
      err => {
        this.usuario = { id: null, nombre: "", direccion: "", telefono: "", ciudad: "" };
        this.usuarioCreado = "No se pudo crear el cliente";
      });
  }

  buscarUsuario() {
    this.limpiarVista();
    console.log(this.id_buscar_usuario);
    this.clienteSrv.consultarCliente(this.id_buscar_usuario).subscribe((result: JSON) => {
      this.info_usuario = result;
      this.id_buscar_usuario = null;
    },
      err => {
        this.info_usuario_text = "Cliente no encontrado";
        this.id_buscar_usuario = null;
      });
  }

  actualizarUsuario() {
    this.limpiarVista();
    console.log(this.usuario_actualizar);
    this.clienteSrv.actualizarCliente(this.usuario_actualizar).subscribe((result: JSON) => {
      this.usuario_actualizar = { id: null, nombre: "", direccion: "", ciudad: "", telefono: "" };
      this.usuarioActualizado = "Cliente actualizado exitosamente";
    },
      err => {
        this.usuario_actualizar = { id: null, nombre: "", direccion: "", ciudad: "", telefono: "" };
        this.usuarioActualizado = "No se pudo actualizar el cliente";
      });
  }

  eliminarUsuario() {
    this.limpiarVista();
    console.log(this.id_eliminar_usuario);
    this.clienteSrv.eliminarCliente(this.id_eliminar_usuario).subscribe((result: JSON) => {
      this.usuarioEliminado = "Se ha eliminado el cliente exitosamente";
      this.id_eliminar_usuario = null;
    },
      err => {
        this.usuarioEliminado = "No se pudo eliminar el cliente";
        this.id_eliminar_usuario = null;
      });
  }

  limpiarVista() {
    this.info_usuario_text = null;
    this.usuarioActualizado = null;
    this.usuarioEliminado = null;
    this.info_usuario = null;
    this.usuarioCreado = null;
  }

}
