import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false; // Variável de controle do estado do menu
  isMobile: boolean = false; // Variável de controle do estado mobile

  constructor() {
    this.detectMobile(); // Chama a função para detectar se está no modo mobile
  }

  detectMobile() {
    // Lógica para detectar se está no modo mobile
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 600; // Defina isMobile como verdadeiro se a largura da tela for menor ou igual a 600px
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectMobile(); // Chama a função para detectar se está no modo mobile ao redimensionar a janela
    if (!this.isMobile) {
      this.isMenuOpen = true; // Garante que o menu esteja aberto no modo desktop
    } else {
      this.isMenuOpen = false; // Garante que o menu esteja fechado no modo mobile
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}
