// src/app/services/debito.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitoService {
  private apiUrl = 'http://localhost:8080/operacoes/debito';

  constructor(private http: HttpClient) { }

  addDebito(id_cliente: number, valor: number): Observable<any> {
    return this.http.post(this.apiUrl, null, { params: { clienteId: id_cliente.toString(), valor: valor.toString() } });
  }
}
