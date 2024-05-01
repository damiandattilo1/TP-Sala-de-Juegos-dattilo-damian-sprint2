import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule

  ), importProvidersFrom(provideFirebaseApp(() => initializeApp(
    {
      "projectId": "dattilodamian-saladejuegos-sp2",
      "appId": "1:988028569182:web:3a7a599b5bd4c4a78dd6cf",
      "storageBucket": "dattilodamian-saladejuegos-sp2.appspot.com",
      "apiKey": "AIzaSyBodhRrppGG8S8bRC5rA4ae1-t-4w9CLeo",
      "authDomain": "dattilodamian-saladejuegos-sp2.firebaseapp.com",
      "messagingSenderId": "988028569182"
    }))),
  importProvidersFrom(provideAuth(() => getAuth())),
  importProvidersFrom(provideFirestore(() => getFirestore())),
  importProvidersFrom(provideStorage(() => getStorage()))]

};
