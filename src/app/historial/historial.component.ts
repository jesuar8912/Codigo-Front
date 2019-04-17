import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialService } from '../shared/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  httpDt: JSON ;
  cardNumber: String;

  constructor(private numTarjeta: ActivatedRoute, private hstSrv: HistorialService) { }

  ngOnInit() {
    this.cardNumber = this.numTarjeta.snapshot.params.cardNumber;
    this.getHistorial(this.cardNumber.substring(1, 17));
  }
  getHistorial(card) {
    this.hstSrv.getHistorial(card).subscribe((result: JSON) => {
      this.httpDt = result;
      console.log(this.httpDt);
    });
  }

}
