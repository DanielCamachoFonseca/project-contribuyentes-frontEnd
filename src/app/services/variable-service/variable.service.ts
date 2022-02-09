import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Variable } from 'src/app/components/variable/VariableModel/variable';

@Injectable({
  providedIn: 'root',
})
export class VariableService {
  /**
   * URL's para consumir los microservicios de spring boot
   */
  private baseURL = 'http://localhost:8080/api';
  private updateURL = 'http://localhost:8080/api/actualizarVariable';
  private searchIdURL = 'http://localhost:8080/api/buscarVariable';
  private deleteURL = 'http://localhost:8080/api/eliminarVariable';

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  ListVariable(): Observable<Variable[]> {
    return this.httpClient.get<Variable[]>(
      this.baseURL + '/consultarVariable'
    );
  }

  registerVariable(variable: Variable): Observable<Object> {
    return this.httpClient.post<Object>(
      this.baseURL + '/registrarVariable',
      variable
    );
  }

  actualizarVariable(id: number, variable: Variable): Observable<object> {
    return this.httpClient.put(`${this.searchIdURL}/${id}`, variable);
  }

  obtenerVariablePorId(id: number): Observable<Variable> {
    return this.httpClient.get<Variable>(`${this.searchIdURL}/${id}`);
  }

  deleteVariable(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}
