import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Variable } from 'src/app/components/variable/VariableModel/variable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { RiesgoVariable } from 'src/app/components/RiesgoVariable/RiesgoVariableModel/riesgo-variable';
import { Segmento } from 'src/app/components/segmento/SegmentoModel/segmento';

@Injectable({
  providedIn: 'root'
})
export class RiesgoVariableService {

   /**
   * URL obtiene el listado de riesgos
   */
    private baseURL = "http://localhost:8080/RiesgoVariable";
    private updateURL = "http://localhost:8080/RiesgoVariable/actualizarRiesgoVariable";
    private searchIdURL = "http://localhost:8080/RiesgoVariable/buscarRiesgoVariable";
    private deleteURL = "http://localhost:8080/RiesgoVariable/eliminarRiesgoVariable";

    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient : HttpClient) { }

  getRiesgoVariable(): Observable<RiesgoVariable[]> {
    return this.httpClient.get<RiesgoVariable[]>(this.baseURL + '/consultarRiesgoVariable');
  }

  ListRiesgos() : Observable<Riesgo[]>{
    return this.httpClient.get<Riesgo[]>(this.baseURL + '/listRiesgo');
  }

  ListVariables() : Observable<Variable[]>{
    return this.httpClient.get<Variable[]>(this.baseURL + '/listaVariable');
  }

  ListSegmentos() : Observable<Segmento[]>{
    return this.httpClient.get<Segmento[]>(this.baseURL + '/listaSegmento');
  }

  deleteRiesgoVariable(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`)
  }

  registerRiesgoVariable(riesgoVariable: RiesgoVariable): Observable<Object> {
    return this.httpClient.post<Object>(this.baseURL + '/registrarRiesgoVariable', riesgoVariable);
  }

  actualizarRiesgoVariable(id: number, riesgoVariable: RiesgoVariable): Observable<Object> {
    return this.httpClient.put(`${this.updateURL}/${id}`,riesgoVariable)
  }

  obtenerRiesgoVariablePorId(id: number): Observable<RiesgoVariable> {
    return this.httpClient.get<RiesgoVariable>(`${this.searchIdURL}/${id}`)
  }
}
