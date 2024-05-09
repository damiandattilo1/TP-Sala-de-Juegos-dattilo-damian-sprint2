import { Component } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
})
export class AppComponent {
  constructor(private authS :AuthService, private router :Router){
    
    
  }
  title = 'tp-sala-juegos';
  logueado()
  {
    console.log(this.authS.userCredentials);
    return this.authS.userCredentials != null;
  }
  logOut()
  {
    this.authS.userCredentials = null;
    this.router.navigate(["/"]);
  }
  nombreDeUsuario()
  {
    return this.authS.userCredentials.email;
  }

}
