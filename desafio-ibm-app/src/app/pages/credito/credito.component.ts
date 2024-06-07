// src/app/pages/credito/credito.component.ts
import { Component } from '@angular/core';
import { CreditoService } from '../../services/credito.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent {
  operacao: any = {
    id_cliente: 1,
    valor: 0
  };
  mensagem: string | null = null;
  isSuccess: boolean = false;

  constructor(private creditoService: CreditoService) { }

  onSubmit() {
    this.creditoService.addCredito(this.operacao.id_cliente, this.operacao.valor).subscribe(
      response => {
        this.mensagem = 'Crédito adicionado com sucesso!';
        this.isSuccess = true;
      },
      error => {
        this.mensagem = 'Erro ao adicionar crédito. Tente novamente.';
        this.isSuccess = false;
      }
    );
  }
}

