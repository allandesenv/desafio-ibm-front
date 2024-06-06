// src/app/services/credito.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiUrl = 'http://localhost:8080/credito';

  constructor(private http: HttpClient) { }

  addCredito(id_cliente: number, valor: number): Observable<any> {
    return this.http.post(this.apiUrl, { id_cliente, valor });
  }
}
