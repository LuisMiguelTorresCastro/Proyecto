import { HttpClient } from '@angular/common/http'; 
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  constructor(private router: Router, private http: HttpClient) {}

  logout() {
    this.http.post('/logout', {}).subscribe(
      (response: any) => {
        console.log('Logged out successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error logging out:', error);
      }
    );
  }
}
