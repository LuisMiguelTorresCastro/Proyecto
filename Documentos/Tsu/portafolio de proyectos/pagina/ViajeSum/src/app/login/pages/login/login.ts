import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      this.message = 'Por favor, completa todos los campos requeridos.';
      return;
    }

    const { username, password } = form.value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        this.message = errorResponse.error || 'Error al iniciar sesión.';
        return;
      }

      const data = await response.json();
      if (data.token) {
        this.message = 'Inicio de sesión exitoso.';
        localStorage.setItem('authToken', data.token);
      } else {
        this.message = 'Token no recibido.';
      }

    } catch (error) {
      if (error instanceof Error) {
        this.message = error.message;
      } else {
        this.message = 'Error desconocido';
      }
    }
  }
}
