import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../shared/services/clientes.service';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {
  httpData: JSON;
  constructor(private clienteSrv: ClientesService) { }
  ngOnInit() {
    this.getClientes();
  }
  getClientes() {
    this.clienteSrv.getClientes().subscribe((result: JSON) => {
      this.httpData = result;
      console.log(this.httpData);
    });
  }
}
