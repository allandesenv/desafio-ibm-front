// src/app/services/credito.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiUrl = 'http://localhost:8080/operacoes/credito';

  constructor(private http: HttpClient) { }

  addCredito(clienteId: number, valor: number): Observable<any> {
    const url = `${this.apiUrl}?clienteId=${clienteId}&valor=${valor}`;
    return this.http.post(url, {});
  }
  
}
