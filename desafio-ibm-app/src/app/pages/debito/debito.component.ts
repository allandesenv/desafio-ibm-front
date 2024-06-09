// src/app/pages/debito/debito.component.ts
import { Component, OnInit } from '@angular/core';
import { DebitoService } from '../../services/debito.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-debito',
  templateUrl: './debito.component.html',
  styleUrls: ['./debito.component.css']
})
export class DebitoComponent implements OnInit {
  operacao: any = {
    id_cliente: "",
    valor: 0
  };
  mensagem: string | null = null;
  isSuccess: boolean = false;
  clientes: any[] = [];

  constructor(private debitoService: DebitoService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data => this.clientes = data,
      error => console.error(error)
    );
  }

  onSubmit() {
    // Verifica se o cliente foi selecionado e se o valor é maior que zero
    if (this.operacao.id_cliente && this.operacao.valor > 0) {
      this.debitoService.addDebito(this.operacao.id_cliente, this.operacao.valor).subscribe(
        response => {
          this.mensagem = 'Débito adicionado com sucesso!';
          this.isSuccess = true;
          this.resetForm();
        },
        error => {
          if (error.error && error.error.message) {
            this.mensagem = 'Erro ao adicionar débito: ' + error.error.message;
          } else {
            this.mensagem = 'Erro ao adicionar débito. Tente novamente.';
          }
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
