import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
  constructor(private socketService: SocketService) { }
  message: string;
  name:string;
  ngOnInit(): void {
    this.socketService.setupSocketConnection();
  }
  sendMessage() {
    this.socketService.Message(this.message);
    this.message='';
  }
}