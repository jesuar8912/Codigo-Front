import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../shared/services/asesores.service';

@Component({
  selector: 'app-mostrar-asesores',
  templateUrl: './mostrar-asesores.component.html',
  styleUrls: ['./mostrar-asesores.component.css']
})
export class MostrarAsesoresComponent implements OnInit {
  httpDt: JSON;
  constructor(private asesorSrv: AsesoresService) { }
  ngOnInit() {
    this.getAsesores();
  }
  getAsesores() {
    this.asesorSrv.getAsesores().subscribe((result: JSON) => {
      this.httpDt = result;
      console.log(this.httpDt);
    });
  }
}
