import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submitted = false;

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

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.clienteService.addCliente(this.cliente).subscribe(
        (novoCliente) => {
          this.clientes.push(novoCliente);
          this.cliente = { nome: '', idade: null, email: '', numeroConta: '' };
          form.resetForm(); // Reseta o formulário após o envio
          this.submitted = false; // Reset da flag após o envio bem-sucedido
        },
        (error) => console.error(error)
      );
    }
  }
}
