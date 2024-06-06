import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent {
  clienteForm: FormGroup;
  clientes: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      numeroConta: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      this.http.post('http://localhost:8080/clientes', cliente).subscribe(response => {
        this.clientes.push(cliente);
        this.clienteForm.reset();
      });
    }
  }
}
