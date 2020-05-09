import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password);
  }

  logIn(email: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afa.auth.signOut();
  }

  hasUser() {
    return this.afa.authState;
  }
}
