import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarClientesComponent } from './pages/cadastrar-clientes/cadastrar-clientes.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DebitoComponent } from './pages/debito/debito.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar-clientes', component: CadastrarClientesComponent },
  { path: 'credito', component: CreditoComponent },
  { path: 'debito', component: DebitoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }