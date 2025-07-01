import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

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
export class ReniecConnectService {
  // Opción 1: Proxy local (recomendado para desarrollo)
  private readonly baseUrl = '/api/reniec/v1/dni';
  
  // Opción 2: Proxy público (alternativa si el local no funciona)
  private readonly fallbackUrl = 'https://cors-anywhere.herokuapp.com/https://api.apis.net.pe/v1/dni';
  
  private readonly token = 'apis-token-16563.Aq1VlGb5bAHhFzECZNGnzxI0SiUUFoQ5';

  // Datos de prueba para demostración
  private readonly mockData: { [key: string]: ReniecResponse } = {
    '44444444': {
      nombre: 'DIAZ CESPEDES HEMILIANA',
      tipoDocumento: '1',
      numeroDocumento: '44444444',
      estado: 'ACTIVO',
      condicion: 'HABIDO',
      direccion: 'AV. AREQUIPA 123, LIMA',
      ubigeo: '150101',
      viaTipo: 'AVENIDA',
      viaNombre: 'AREQUIPA',
      zonaCodigo: '',
      zonaTipo: '',
      numero: '123',
      interior: '',
      lote: '',
      dpto: '',
      manzana: '',
      kilometro: '',
      distrito: 'LIMA',
      provincia: 'LIMA',
      departamento: 'LIMA',
      apellidoPaterno: 'DIAZ',
      apellidoMaterno: 'CESPEDES',
      nombres: 'HEMILIANA'
    },
    '12345678': {
      nombre: 'PEREZ GOMEZ JUAN CARLOS',
      tipoDocumento: '1',
      numeroDocumento: '12345678',
      estado: 'ACTIVO',
      condicion: 'HABIDO',
      direccion: 'CALLE SIEMPRE VIVA 456, MIRAFLORES',
      ubigeo: '150122',
      viaTipo: 'CALLE',
      viaNombre: 'SIEMPRE VIVA',
      zonaCodigo: '',
      zonaTipo: '',
      numero: '456',
      interior: '',
      lote: '',
      dpto: '',
      manzana: '',
      kilometro: '',
      distrito: 'MIRAFLORES',
      provincia: 'LIMA',
      departamento: 'LIMA',
      apellidoPaterno: 'PEREZ',
      apellidoMaterno: 'GOMEZ',
      nombres: 'JUAN CARLOS'
    },
    '87654321': {
      nombre: 'GOMEZ PEREZ MARIA ELENA',
      tipoDocumento: '1',
      numeroDocumento: '87654321',
      estado: 'ACTIVO',
      condicion: 'HABIDO',
      direccion: 'JR. FALSA 789, SAN ISIDRO',
      ubigeo: '150131',
      viaTipo: 'JIRON',
      viaNombre: 'FALSA',
      zonaCodigo: '',
      zonaTipo: '',
      numero: '789',
      interior: '',
      lote: '',
      dpto: '',
      manzana: '',
      kilometro: '',
      distrito: 'SAN ISIDRO',
      provincia: 'LIMA',
      departamento: 'LIMA',
      apellidoPaterno: 'GOMEZ',
      apellidoMaterno: 'PEREZ',
      nombres: 'MARIA ELENA'
    }
  };

  constructor(private http: HttpClient) { }

  buscarPorDNI(dni: string): Observable<ReniecResponse> {
    // Primero verificar si tenemos datos de prueba
    if (this.mockData[dni]) {
      console.log('Usando datos de prueba para DNI:', dni);
      return of(this.mockData[dni]);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });

    // Intentar con la API real con timeout
    return this.http.get<ReniecResponse>(`${this.baseUrl}?numero=${dni}`, { headers })
      .pipe(
        timeout(10000), // 10 segundos de timeout
        catchError(error => {
          console.log('Error con API real, intentando proxy público...');
          return this.buscarPorDNIFallback(dni);
        })
      );
  }

  // Método alternativo usando proxy público
  buscarPorDNIFallback(dni: string): Observable<ReniecResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });

    return this.http.get<ReniecResponse>(`${this.fallbackUrl}?numero=${dni}`, { headers })
      .pipe(
        timeout(10000),
        catchError(error => {
          console.log('Error con proxy público, usando datos de prueba...');
          // Si no hay datos de prueba, devolver error
          if (this.mockData[dni]) {
            return of(this.mockData[dni]);
          } else {
            return throwError(() => new Error('DNI no encontrado en la base de datos'));
          }
        })
      );
  }

  // Método para obtener datos de prueba disponibles
  getMockDNIs(): string[] {
    return Object.keys(this.mockData);
  }
} 