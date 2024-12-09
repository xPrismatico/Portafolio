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

  onSubmit() {
    this.isSubmitting = true;

    // Simulación de envío
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
    }, 2000); // Simula un retraso de 2 segundos
  }

  closePopup() {
    this.showSuccessMessage = false;
  }
}
