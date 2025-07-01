import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ReniecResponse {
  nombre: string;
  tipoDocumento: string;
  numeroDocumento: string;
  estado: string;
  condicion: string;
  direccion: string;
  ubigeo: string;
  viaTipo: string;
  viaNombre: string;
  zonaCodigo: string;
  zonaTipo: string;
  numero: string;
  interior: string;
  lote: string;
  dpto: string;
  manzana: string;
  kilometro: string;
  distrito: string;
  provincia: string;
  departamento: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReniecBackendService {
  // Para producción, usar un endpoint de tu backend
  private readonly baseUrl = '/api/reniec/v1/dni';

  constructor(private http: HttpClient) { }

  buscarPorDNI(dni: string): Observable<ReniecResponse> {
    return this.http.get<ReniecResponse>(`${this.baseUrl}?numero=${dni}`)
      .pipe(
        map(response => {
          console.log('Respuesta de RENIEC:', response);
          return response;
        }),
        catchError(error => {
          console.error('Error al buscar en RENIEC:', error);
          return throwError(() => new Error('Error al buscar en RENIEC'));
        })
      );
  }
} 