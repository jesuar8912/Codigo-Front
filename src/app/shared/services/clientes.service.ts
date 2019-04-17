import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http: Http) { }
  getClientes(): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/lista/clientes/tarjetas")
      .map((response) => response.json());
  }
}
