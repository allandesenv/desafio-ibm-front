import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = true; // Variável de controle do estado do menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Método para alternar o estado do menu
  }
}
