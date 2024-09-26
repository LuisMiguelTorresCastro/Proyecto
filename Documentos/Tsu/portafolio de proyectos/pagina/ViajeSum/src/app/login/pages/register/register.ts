import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  message: string = '';

  async onSubmit(form: NgForm): Promise<void> {
    const { username, password, confirmPassword } = form.value;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }

      this.message = 'Usuario registrado exitosamente';

    } catch (error) {
      if (error instanceof Error) {
        this.message = error.message;
      }
    }
  }
}
