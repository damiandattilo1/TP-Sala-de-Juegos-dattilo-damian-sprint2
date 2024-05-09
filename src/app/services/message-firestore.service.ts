import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {Message} from '../shared/interfaces/message';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class MessageFirestoreService {

  private PATH = 'mensajes';
  private items$: Observable<Message[]>;
  private db = inject(AngularFireDatabase);

  public var: number = 1;
  constructor(private firestore :AngularFirestore, private authS :AuthService) {
    console.log('MessageFirestoreService');
    this.items$ = this.db.list(this.PATH).valueChanges() as Observable<Message[]>;
   }
   public getAll(){
    return this.items$;
   }
   public enviarMensaje(mensaje: string){

    const col = this.firestore.collection('mensajesChat');
    console.log("col");
    let prueba: String;
    prueba = this.authS.userCredentials.email.toString();
    console.log(prueba);
    col.add({Email: prueba, fechaYHora :new Date(), mensaje:mensaje });

    const col2 = this.firestore.collection('mensajesChat');
    //console.log(this.authS.userCredentials);
    //col.add({email: this.authS.userCredentials.user, fechaYHora :new Date(), mensaje: mensaje });


   }
   
}
