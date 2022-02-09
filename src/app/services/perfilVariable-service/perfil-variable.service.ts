import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilVariable } from 'src/app/components/PerfilVariable/PerfilVariableModel/perfil-variable';

@Injectable({
  providedIn: 'root'
})
export class PerfilVariableService {

  /**
   * URL's para consumir los microservicios de spring boot
   */
   private baseURL = 'http://localhost:8080/api';

   private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});

  constructor(private httpClient : HttpClient) { }

  ListPerfilVariable(): Observable<PerfilVariable[]>{
    return this.httpClient.get<PerfilVariable[]>(
      this.baseURL + '/consultarPerfilVariable'
      );
  }
}
