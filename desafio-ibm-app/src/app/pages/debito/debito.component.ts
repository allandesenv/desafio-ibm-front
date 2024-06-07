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
    id_cliente: 1,
    valor: ""
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
    this.debitoService.addDebito(this.operacao.id_cliente, this.operacao.valor).subscribe(
      response => {
        this.mensagem = 'Débito adicionado com sucesso!';
        this.isSuccess = true;
        this.resetForm();
      },
      error => {
        this.mensagem = 'Erro ao adicionar débito. Tente novamente.';
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
