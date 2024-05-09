import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { MessageFirestoreService } from '../services/message-firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrl: './chat.page.css'
})


export class ChatPage {
  
    mensaje: string = "";
  constructor(private firestore: AngularFirestore, public authF :AuthService, private router :Router, private servicioMensajeria: MessageFirestoreService) {}
  

  manejarEnviar()
  {
    this.servicioMensajeria.enviarMensaje(this.mensaje);
    this.mensaje = "";
  }
  

}



