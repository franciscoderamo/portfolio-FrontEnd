import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private auth: Auth) { }

  onAuthChange() {
    return onAuthStateChanged(this.auth, user => {
      this.isLoggedIn = !!user
    }
    );
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    console.log('AUTH', this.auth)
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    console.log(this.auth)
    return signOut(this.auth);
  }

  getUserEmail() {
    return this.auth.currentUser?.email;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {

//   url = 'http://localhost:3000/api'; // La URL que corresponde en cada caso
//   token: any;

//   constructor(private http: HttpClient, private router: Router, public authService: AuthService) { }

//   login(email: string, password: string) {
//     this.http.post(this.url + '/authenticate', {email: email, password: password})
//         .subscribe((resp: any) => {
//         //Redireccionamos al usuario a su pertil
//           this.router.navigate(['profile']); //portfolio
//           // Guardamos el token en Localstorage
//           localStorage.setItem('auth_token', resp.token);
//         })
//   };

//   // Para cerrar sesión eliminamos el token del localStorate
//   logout() {
//     localStorage.removeItem('token');
//   }
//   // Un servicio para verificar si existe la sesión
//   public get logIn(): boolean {
//     return (localStorage.getItem('token') !== null);
//   }
// }
