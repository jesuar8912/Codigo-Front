import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  constructor(private http: Http) { }
  getHistorial(card): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/historial/consumo/"+card)
      .map((response) => response.json());
  }
}