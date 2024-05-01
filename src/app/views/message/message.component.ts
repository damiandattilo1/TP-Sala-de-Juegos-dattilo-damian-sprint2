import { Component, OnInit, inject } from '@angular/core';
import { Message } from '../../shared/interfaces/message';
import { MessageFirestoreService } from '../../services/message-firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  protected message: string ='';
  protected items$: Observable<Message[]> | undefined;

  private messageSrv = inject (MessageFirestoreService);
  ngOnInit(): void{
    this.getItems();
  }

  private getItems(){
    this.items$ = this.messageSrv.getAll();
  }

  protected onSend(){
    const obj: Message = {
      code: '',
      content: this.message
    }
  }

}
