import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { RiesgoCuadrante } from 'src/app/components/RiesgoCuadrante/RiesgoCuadranteModel/riesgo-cuadrante';

@Injectable({
  providedIn: 'root'
})
export class RiesgoCuadranteService {

   /**
   * URL obtiene el listado de riesgos
   */
    private baseURL = "http://localhost:8080/RiesgoCuadrante";
    private updateURL = "http://localhost:8080/RiesgoCuadrante/actualizarRiesgoCuadrante";
    private searchIdURL = "http://localhost:8080/RiesgoCuadrante/buscarRiesgoCuadrante";
    private deleteURL = "http://localhost:8080/RiesgoCuadrante/eliminarRiesgoCuadrante";

    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient : HttpClient) { }

  getRiesgoCuadrantes(): Observable<RiesgoCuadrante[]>{
    return this.httpClient.get<RiesgoCuadrante[]>(this.baseURL + '/consultarRiesgoCuadrante');
  }

  ListRiesgos() : Observable<Riesgo[]>{
    return this.httpClient.get<Riesgo[]>(this.baseURL + '/listaRiesgo');

  }

  deleteRiesgoCuadrante(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`)
  }

  registerRiesgoCuadrante(riesgoCuadrante: RiesgoCuadrante): Observable<Object>{
    return this.httpClient.post<Object>(this.baseURL + '/registrarRiesgoCuadrante', riesgoCuadrante);
  }

  actualizarRiesgoCuadrante(id: number, riesgoCuadrante: RiesgoCuadrante) : Observable<object> {
    return this.httpClient.put(`${this.updateURL}/${id}`,riesgoCuadrante)
  }

  obtenerRiesgoCuadrantesPorId(id: number): Observable<RiesgoCuadrante> {
    return this.httpClient.get<RiesgoCuadrante>(`${this.searchIdURL}/${id}`)
  }



}
