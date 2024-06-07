// src/app/pages/credito/credito.component.ts
import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services/credito.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {
  operacao: any = {
    id_cliente: 1,
    valor: ""
  };
  mensagem: string | null = null;
  isSuccess: boolean = false;
  clientes: any[] = [];

  constructor(private creditoService: CreditoService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data => this.clientes = data,
      error => console.error(error)
    );
  }

  onSubmit() {
    this.creditoService.addCredito(this.operacao.id_cliente, this.operacao.valor).subscribe(
      response => {
        this.mensagem = 'Crédito adicionado com sucesso!';
        this.isSuccess = true;
        this.resetForm();
      },
      error => {
        this.mensagem = 'Erro ao adicionar crédito. Tente novamente.';
        this.isSuccess = false;
        this.resetForm();
      }
    );
  }

  resetForm() {
    this.operacao = {
      id_cliente: 1,
      valor: 0
    };
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
