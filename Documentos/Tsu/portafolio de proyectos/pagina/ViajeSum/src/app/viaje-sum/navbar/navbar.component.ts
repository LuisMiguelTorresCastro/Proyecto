import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavBarComponent {
  sidebarItems = [
    { label: 'Inicio de sesion', icon: 'login', url: '/Login/login' },
    { label: 'Registro', icon: 'app_registration', url: '/Login/register' },
    { label: 'Inicio de sesion', icon: 'login', url: '/User/loginCli' },
    { label: 'Registro', icon: 'app_registration', url: '/User/registerCli' },
    { label: 'Registro', icon: 'app_registration', url: '/Details/details' },
  ];
}
