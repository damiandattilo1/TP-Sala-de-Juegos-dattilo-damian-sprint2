import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  constructor(public authF :AuthService) {}
  

  userName: string = "";
  password: string = "";
  manejarRegistro() {
    this.authF.register(this.userName, this.password);
    

  }
}

