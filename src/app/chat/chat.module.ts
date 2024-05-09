import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatPage } from './chat.page';
import { ChatRoutingModule } from './chat-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule
  ],
  declarations: [ChatPage],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  
})
export class ChatModule { }
