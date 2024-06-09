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
    id_cliente: "",
    valor: 0
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
    // Verifica se o cliente foi selecionado e se o valor é maior que zero
    if (this.operacao.id_cliente && this.operacao.valor > 0) {
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
    } else {
      // Exibe mensagem de erro se o cliente não estiver selecionado ou se o valor for zero ou menor
      this.mensagem = 'Selecione um cliente e insira um valor maior que zero.';
    }
  }

  resetForm() {
    this.operacao = {
      id_cliente: "",
      valor: 0
    };
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
