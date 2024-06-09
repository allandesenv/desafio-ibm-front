// src/app/pages/extrato/extrato.component.ts
import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  clienteId: number | null = null;
  clientes: any[] = [];
  extrato: any[] = [];
  saldoTotal: number = 0;

  constructor(private extratoService: ExtratoService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data => this.clientes = data,
      error => console.error(error)
    );
  }

  onClienteChange() {
    if (this.clienteId !== null) {
      this.extratoService.getExtrato(this.clienteId).subscribe(
        data => {
          this.extrato = data.operacoes;
          this.saldoTotal = data.saldoTotal;
        },
        error => console.error(error)
      );
    }
  }
}
