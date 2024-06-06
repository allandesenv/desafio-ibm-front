import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = {
    nome: '',
    idade: null,
    email: '',
    numeroConta: ''
  };

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => this.clientes = clientes,
      (error) => console.error(error)
    );
  }

  onSubmit(): void {
    this.clienteService.addCliente(this.cliente).subscribe(
      (novoCliente) => {
        this.clientes.push(novoCliente);
        this.cliente = { nome: '', idade: null, email: '', numeroConta: '' };
      },
      (error) => console.error(error)
    );
  }
}
