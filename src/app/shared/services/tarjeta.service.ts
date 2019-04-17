import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http: Http) { }
  crearTarjeta(tarjeta: JSON): Observable<JSON> {
    return this.http.post("https://aplicacion-ibm-core.mybluemix.net/service/ibm/tarjeta", tarjeta)
      .map((response) => response.json());
  }
  consultarTarjeta(id): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/tarjeta/" + id)
      .map((response) => response.json());
  }
  actualizarTarjeta(tarjeta: JSON): Observable<JSON> {
    return this.http.put("https://aplicacion-ibm-core.mybluemix.net/service/ibm/tarjeta/", tarjeta)
      .map((response) => response.json());
  }
  eliminarTarjeta(id): Observable<JSON> {
    return this.http.delete("https://aplicacion-ibm-core.mybluemix.net/service/ibm/tarjeta/" + id)
      .map((response) => response.json());
  }
  crearTarjetaCliente(tarjeta: JSON, id : any): Observable<JSON> {
    return this.http.post("https://aplicacion-ibm-core.mybluemix.net/service/ibm/tarjeta/" + id, tarjeta)
      .map((response) => response.json());
  }
}
