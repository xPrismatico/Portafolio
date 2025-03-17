import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbar = document.getElementById('navbar-sticky');
    if (navbar) {
      if (this.isMenuOpen) {
        navbar.classList.remove('hidden');
      } else {
        navbar.classList.add('hidden');
      }
    }
  }
}
