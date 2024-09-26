import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterCliComponent {
  message: string = '';

  async onSubmit(form: NgForm): Promise<void> {
    const { nombreCliente, apellidoCliente, correoCliente, telefonoCliente, password, confirmPassword } = form.value;

    if (password !== confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreCliente,
          apellidoCliente,
          correoCliente,
          telefonoCliente,
          password
        }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar cliente');
      }

      this.message = 'Cliente registrado exitosamente';

    } catch (error) {
      if (error instanceof Error) {
        this.message = error.message;
      }
    }
  }
}
