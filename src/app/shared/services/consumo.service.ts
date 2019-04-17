import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  constructor(private http: Http) { }
  crearConsumo(consumo: JSON, id: any): Observable<JSON> {
    return this.http.post("https://aplicacion-ibm-core.mybluemix.net/service/ibm/consumo/" + id, consumo)
      .map((response) => response.json());
  }
  consultarConsumo(id): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/consumo/" + id)
      .map((response) => response.json());
  }
  actualizarConsumo(consumo: JSON): Observable<JSON> {
    return this.http.put("https://aplicacion-ibm-core.mybluemix.net/service/ibm/consumo/", consumo)
      .map((response) => response.json());
  }
  eliminarConsumo(id): Observable<JSON> {
    return this.http.delete("https://aplicacion-ibm-core.mybluemix.net/service/ibm/consumo/" + id)
      .map((response) => response.json());
  }
}
