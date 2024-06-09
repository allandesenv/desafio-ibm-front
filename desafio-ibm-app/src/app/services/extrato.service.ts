// src/app/services/extrato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  private apiUrl = 'http://localhost:8080/operacoes';

  constructor(private http: HttpClient) { }

  getExtrato(clienteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${clienteId}/extrato`);
  }
}
