import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private authF: AngularFireAuth, private router: Router, private firestore :AngularFirestore) { }
  userCredentials: any = null;
  mensajeError :any;
  
  async register(mail: string, pass: string) {
    try
    {
      this.userCredentials = this.authF.createUserWithEmailAndPassword(mail, pass).then((credenciales) => {
        this.imprimeHoraActual();
        console.log('19');
        this.userCredentials = credenciales.user;
        this.guardar(mail);
        this.router.navigate(["/home"]);
      }).catch((reason: any) => {
        this.imprimeHoraActual();
        console.log('29 - hay un error');
        //console.error(reason);
        //mensajeError = reason;
        if(reason == "FirebaseError: Firebase: The supplied auth credential is incorrect, malformed or has expired. (auth/invalid-credential).")
        {
          this.mensajeError = "usuario y/o contraseña incorrectos";
        }
        else if(reason == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).")
        {
          this.mensajeError = "mail vacio o con formato incorrecto";
        }
        else if("FirebaseError: Firebase: A non-empty password must be provided (auth/missing-password).")
        {
          this.mensajeError = "contraseña vacia";
        }
        else
        {
          this.mensajeError = reason;
  
        }
      });

    }
    catch(e :any){
      this.mensajeError = e.toString();

  }
}
  login(mail: string, pass: string) {

    this.authF.signInWithEmailAndPassword(mail, pass).then((credenciales) => {
      this.imprimeHoraActual();
      console.log('19');
      this.userCredentials = credenciales.user;
      this.guardar(mail);
      this.router.navigate(["/home"]);
    }).catch((reason: any) => {
      this.imprimeHoraActual();
      console.log('23');
      console.error(reason);
      //mensajeError = reason;
      if(reason == "FirebaseError: Firebase: The supplied auth credential is incorrect, malformed or has expired. (auth/invalid-credential).")
      {
        this.mensajeError = "usuario y/o contraseña incorrectos";
      }
      else if(reason == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).")
      {
        this.mensajeError = "mail vacio o con formato incorrecto";
      }
      else if("FirebaseError: Firebase: A non-empty password must be provided (auth/missing-password).")
      {
        this.mensajeError = "contraseña vacia";
      }
      else
      {
        this.mensajeError = reason;

      }
    });

  }
  logout() {
    this.authF.signOut();
  }
  imprimeHoraActual() {

    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString();
    console.log(formattedTime);

  }
  guardar(mail:any){
    const col = this.firestore.collection('logs');
    console.log("col");
    col.add({Email: mail, fechaYHora :new Date() });
  }
}
