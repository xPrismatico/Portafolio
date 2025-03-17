import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'portfolio-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitting: boolean = false;
  showSuccessMessage: boolean = false;

  // Mensajes de error
  errors: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Reiniciar mensajes de error
    this.errors = { name: '', email: '', message: '' };

    // Validar campos
    if (!this.name.trim()) {
      this.errors.name = 'El nombre no puede estar vacío.';
    }
    if (!this.email.trim()) {
      this.errors.email = 'El correo electrónico no puede estar vacío.';
    }
    if (!this.message.trim()) {
      this.errors.message = 'El mensaje no puede estar vacío.';
    }

    // Si hay errores, no enviar el formulario
    if (this.errors.name || this.errors.email || this.errors.message) {
      return;
    }

    // Simulación de envío
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
    }, 2000); // Simula un retraso de 2 segundos
  }

  closePopup() {
    this.showSuccessMessage = false;
  }
}
