import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'sobre-mi';
  isMenuOpen: boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Cerrar el menú móvil después de hacer clic en un enlace
    this.isMenuOpen = false;
  }

  onScroll() {
    const sobreMi = document.getElementById('sobre-mi');
    const habilidades = document.querySelector('.portfolio-info-card, #habilidades');
    const proyectos = document.getElementById('proyectos');

    const scrollY = window.scrollY + window.innerHeight / 3;

    if (proyectos && proyectos.offsetTop <= scrollY) {
      this.activeSection = 'proyectos';
    } else if (habilidades && habilidades.getBoundingClientRect().top + window.scrollY <= scrollY) {
      this.activeSection = 'habilidades';
    } else if (sobreMi && sobreMi.offsetTop <= scrollY) {
      this.activeSection = 'sobre-mi';
    }
  }
}
