import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
//   url = 'http://localhost:3000/api'; // La URL que corresponde en cada caso
//   token: any;
  //authURL = 'https://portfolio-cg60.onrender.com'
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
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

}
