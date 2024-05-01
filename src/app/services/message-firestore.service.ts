import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {Message} from '../shared/interfaces/message';
import {AngularFireDatabase} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class MessageFirestoreService {

  private PATH = 'mensajes';
  private items$: Observable<Message[]>;
  private db = inject(AngularFireDatabase);

  public var: number = 1;
  constructor() {
    console.log('MessageFirestoreService');
    this.items$ = this.db.list(this.PATH).valueChanges() as Observable<Message[]>;
   }
   public getAll(){
    return this.items$;
   }

}
