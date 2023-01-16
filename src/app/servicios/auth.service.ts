import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:3000/api'; // La URL que corresponde en cada caso
  token: any;

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password})
        .subscribe((resp: any) => {
        //Redireccionamos al usuario a su pertil
          this.router.navigate(['profile']);
          // Guardamos el token en Localstorage
          localStorage.setItem('auth_token', resp.token);
        })
  };

  // Para cerrar sesión eliminamos el token del localStorate
  logout() {
    localStorage.removeItem('token');
  }
  // Un servicio para verificar si existe la sesión
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
