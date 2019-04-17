import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  constructor(private http: Http) { }
  crearAsesor(asesor: JSON): Observable<JSON> {
    return this.http.post("https://aplicacion-ibm-core.mybluemix.net/service/ibm/asesor", asesor)
      .map((response) => response.json());
  }
  consultarAsesor(id): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/asesor/" + id)
      .map((response) => response.json());
  }
  actualizarAsesor(asesor: JSON): Observable<JSON> {
    return this.http.put("https://aplicacion-ibm-core.mybluemix.net/service/ibm/asesor", asesor)
      .map((response) => response.json());
  }
  eliminarAsesor(id): Observable<JSON> {
    return this.http.delete("https://aplicacion-ibm-core.mybluemix.net/service/ibm/asesor/" + id)
      .map((response) => response.json());
  }
}
