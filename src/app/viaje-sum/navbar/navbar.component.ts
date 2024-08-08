import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavBarComponent {
  sidebarItems = [
    { label: 'Inicio de sesion', icon: 'login', url: '/auth' },
    { label: 'Registro', icon: 'app_registration', url: '/Auth/adm' },
  ];
}
