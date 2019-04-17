import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  constructor(private http: Http) { }
  getAsesores(): Observable<JSON> {
    return this.http.get("https://aplicacion-ibm-core.mybluemix.net/service/ibm/asesor")
      .map((response) => response.json());
  }
}
