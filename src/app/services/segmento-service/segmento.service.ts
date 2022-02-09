import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Segmento } from 'src/app/components/segmento/SegmentoModel/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentoService {

  /**
   * URL's para consumir los microservicios de spring boot
   */
  private baseURL = "http://localhost:8080/api";
  private updateURL = "http://localhost:8080/api/actualizarSegmento";
  private searchIdURL = "http://localhost:8080/api/buscarSegmento";
  private deleteURL = "http://localhost:8080/api/eliminarSegmento";

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private httpClient : HttpClient) { }

  ListSegmentos() : Observable<Segmento[]>{
    return this.httpClient.get<Segmento[]>(this.baseURL + '/consultarSegmento');
  }

  registerSegmento(segmento : Segmento) : Observable<Object>{
    return this.httpClient.post<Object>(this.baseURL + '/registrarSegmento', segmento);
  }

  actualizarSegmento(id:number, segmento: Segmento) : Observable<object> {
    return this.httpClient.put(`${this.updateURL}/${id}`,segmento);
  }

  obtenerSegmentoPorId(id:number):Observable<Segmento>{
    return this.httpClient.get<Segmento>(`${this.searchIdURL}/${id}`);
  }

  /**
   * Este metodo sirve para eliminar un registro de la entidad riesgo
   * @param id
   * @returns
   */
  deleteSegmento(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }

}

