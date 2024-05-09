import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authF: AuthService, private router: Router) { 
    if(this.authF.userCredentials == null)
    {
      this.redireccionar();


    }
  }


  redireccionar() {

    this.router.navigate(["/login"]);
  }
 
  
}
