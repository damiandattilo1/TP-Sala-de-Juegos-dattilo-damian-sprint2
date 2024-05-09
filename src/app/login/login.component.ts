import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  
  constructor(private firestore: AngularFirestore, public authF :AuthService, private router :Router) {}
  

  userName: string = "";
  password: string = "";
  manejarLogin() {
    this.authF.login(this.userName, this.password);
    this.guardar();
  }
  guardar(){
    const col = this.firestore.collection('usuarios');
    col.add({Nombre: 'Fernando', Apellido: 'Frenandez', edad: 30});
  }

}



