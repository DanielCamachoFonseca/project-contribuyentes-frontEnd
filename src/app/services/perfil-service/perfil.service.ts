import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/components/Perfil/PerfilModel/perfil';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

   /**
   * URL's para consumir los microservicios de spring boot
   */
    private baseURL = 'http://localhost:8080/api';

    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',});

   constructor(private httpClient : HttpClient) { }

   ListPerfil(): Observable<Perfil[]>{
     return this.httpClient.get<Perfil[]>(
       this.baseURL + '/consultarPerfil'
     );
   }
}
