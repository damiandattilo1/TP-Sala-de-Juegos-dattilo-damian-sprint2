import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private authF: AngularFireAuth) { }
  userCredentials: any = null;

  async register(mail: string, pass: string) {
    this.userCredentials = await this.authF.createUserWithEmailAndPassword(mail, pass);
    console.log(this.userCredentials);
  }
  login(mail: string, pass: string) {
    this.authF.signInWithEmailAndPassword(mail, pass).then((credenciales) => {
      this.imprimeHoraActual();
      console.log('19');
      this.userCredentials = credenciales.user;
    }).catch((reason: any) => {
      this.imprimeHoraActual();
      console.log('23');
      console.error(reason);
    });
    this.imprimeHoraActual();
    console.log('27');
    console.log(this.userCredentials);

  }
  logout() {
    this.authF.signOut();
  }
  imprimeHoraActual() {

    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString();
    console.log(formattedTime);

  }
}
