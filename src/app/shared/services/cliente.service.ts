import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: Http) { }
  crearCliente(cliente: JSON): Observable<JSON> {
    return this.http.post("https://aplicacion-ibm-core.mybluemix.net/service/ibm/cliente", cliente)
      .map((response) => response.json());
  }
  consultarCliente(id): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/cliente/" + id)
      .map((response) => response.json());
  }
  actualizarCliente(cliente: JSON): Observable<JSON> {
    return this.http.put("https://aplicacion-ibm-core.mybluemix.net/service/ibm/cliente/", cliente)
      .map((response) => response.json());
  }
  eliminarCliente(id): Observable<JSON> {
    return this.http.delete("https://aplicacion-ibm-core.mybluemix.net/service/ibm/cliente/" + id)
      .map((response) => response.json());
  }
}
