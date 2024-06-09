import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isMenuOpen: boolean = false; // Inicializado com false por padrão
  @Input() isMobile: boolean = false; // Propriedade para controlar o estado mobile
  @Output() menuToggle = new EventEmitter<boolean>(); // Evento de toggle do menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
    this.menuToggle.emit(this.isMenuOpen); // Emite o evento de toggle do menu
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false; // Fecha o menu
      this.menuToggle.emit(this.isMenuOpen); // Emite o evento de toggle do menu
    }
  }
}
