import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadastrarClientesComponent } from './pages/cadastrar-clientes/cadastrar-clientes.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DebitoComponent } from './pages/debito/debito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { ClienteService } from './services/cliente.service';
import { CreditoService } from './services/credito.service';
import { DebitoService } from './services/debito.service';
import { ExtratoService } from './services/extrato.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CadastrarClientesComponent,
    CreditoComponent,
    DebitoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService, CreditoService, DebitoService, ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
