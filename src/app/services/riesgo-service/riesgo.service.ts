import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Riesgo } from '../../components/Riesgo/RiesgoModel/riesgo';

@Injectable({
  providedIn: 'root'
})
export class RiesgoService {

  /**
   * URL obtiene el listado de riesgos
   */
  private baseURL = "http://localhost:8080/api";
  private updateURL = "http://localhost:8080/api/actualizarRiesgo";
  private searchIdURL = "http://localhost:8080/api/buscarRiesgo";
  private deleteURL = "http://localhost:8080/api/eliminarRiesgo";

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient : HttpClient) {  }

  /**
   * Este metodo sivre para obtener los registros de la entidad riesgo
   * @returns Riesgo[]
   */
  ListRiesgos() : Observable<Riesgo[]>{
    return this.httpClient.get<Riesgo[]>(this.baseURL + '/consultarRiesgo');

  }

  /**
   * Este metodo sivre para crear un registro de la entidad riesgo
   *
   */
  registerRiesgo(riesgo:Riesgo) : Observable<Object>{
    return this.httpClient.post<Object>(this.baseURL + '/registrarRiesgo', riesgo);

  }

  /**
   * Este metodo sirve para actualizar un registro de la entidad riesgo
   * @param id
   * @param riesgo
   * @returns
   */
  actualizarRiesgo(id:number, riesgo: Riesgo) : Observable<object> {
    return this.httpClient.put(`${this.updateURL}/${id}`,riesgo);
  }

  /**
   * Este metodo sirve para buscar un registro de la entidad riesgo por Id
   * @param id
   * @returns
   */
  obtenerRiesgoPorId(id:number):Observable<Riesgo>{
    return this.httpClient.get<Riesgo>(`${this.searchIdURL}/${id}`);
  }

  /**
   * Este metodo sirve para eliminar un registro de la entidad riesgo
   * @param id
   * @returns
   */
  deleteRiesgo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }

}
