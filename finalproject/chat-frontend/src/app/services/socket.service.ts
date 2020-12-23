import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
const SOCKET_ENDPOINT = 'localhost:3030';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  name;
  messages: [];
  socket;
  constructor() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('previous-messages', (data: Array ) =>{

    });
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    const element3 = document.createElement('span');
    element3.innerHTML = "New Member joined";
    element3.style.display = 'flex';
    element3.style.justifyContent = 'center';
    element3.style.color = 'rgba(255, 255, 255, 0.5)';
    document.getElementById('message-list').appendChild(element3);
    
    this.socket.on('message-broadcast', (data: string, date: string, name: string) => {
      if (data) {
        const element3 = document.createElement('span');
        element3.innerHTML = name;

        element3.style.display = 'flex';
        element3.style.flexDirection = 'row';

        element3.style.color = 'rgba(255, 255, 255, 0.5)';
        document.getElementById('message-list').appendChild(element3);

        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = '#82ccdd';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        element.style.borderRadius = '30px';
        element.style.width = 'fit-content';
        element.style.marginLeft = '0';
        element.style.marginRight = 'auto';
        document.getElementById('message-list').appendChild(element);
        const element2 = document.createElement('span');
        element2.innerHTML = date;

        element2.style.display = 'flex';
        element2.style.flexDirection = 'row';

        element2.style.color = 'rgba(255, 255, 255, 0.5)';
        document.getElementById('message-list').appendChild(element2);
      }
    });
   
  }
  Message(message) {
    // console.log(message);
    var dt = new Date();
    this.socket.emit('message', message, dt.toLocaleString(), this.name);
    const element3 = document.createElement('span');
    element3.innerHTML = this.name;

    element3.style.display = 'flex';
    element3.style.flexDirection = 'row-reverse';

    element3.style.color = 'rgba(255, 255, 255, 0.5)';
    document.getElementById('message-list').appendChild(element3);
    const element = document.createElement('li');
    element.innerHTML = message;
    element.style.background = '#82ccdd';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.borderRadius = '30px';
    element.style.position = 'relative';
    element.style.width = 'fit-content';
    element.style.marginLeft = 'auto';
    element.style.marginRight = '0';
    element.style.textAlign = 'right';

    document.getElementById('message-list').appendChild(element);
    const element2 = document.createElement('span');
    element2.innerHTML = dt.toLocaleString();

    element2.style.display = 'flex';
    element2.style.flexDirection = 'row-reverse';

    element2.style.color = 'rgba(255, 255, 255, 0.5)';
    document.getElementById('message-list').appendChild(element2);
    message = '';
  }
}
