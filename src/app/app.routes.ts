import { Routes } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
];
