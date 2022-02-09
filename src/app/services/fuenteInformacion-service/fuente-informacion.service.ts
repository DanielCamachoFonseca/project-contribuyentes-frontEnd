import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuenteInformacion } from 'src/app/components/FuenteInformacion/fuenteInformacionModel/fuente-informacion'

@Injectable({
  providedIn: 'root'
})
export class FuenteInformacionService {

  /**
   * URL's para consumir los microservicios de spring boot
   */
   private baseURL = 'http://localhost:8080/api';

   private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});


  constructor(private httpClient : HttpClient) { }

  ListFuenteInformacion(): Observable<FuenteInformacion[]>{
    return this.httpClient.get<FuenteInformacion[]>(
      this.baseURL + '/consultarFuenteInformacion'
    );
  }
}
