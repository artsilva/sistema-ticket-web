import { Message } from './../../../../shared/models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit {

  messages: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.getChatMessages();
  }

  getChatMessages() {
    this.messages = [
      { id: 1, type: 1, date: '12-12-2019', hour: '11:45:36', description: 'Hola, le informo que su solicitud estara hoy a mas tardar a las 4 de la tarde.' },
      { id: 2, type: 2, date: '12-12-2019', hour: '13:45:02', description: 'Ok, muchas gracias, lamentablemente no estaré hoy.' },
      { id: 3, type: 1, date: '12-12-2019', hour: '13:50:59', description: 'Lo dejamos para mañana entonces, Saludos.' },
      { id: 4, type: 1, date: '12-12-2019', hour: '13:50:59', description: 'se me olvidaba, podría pasar mañana por mi oficina?.' },
    ];
  }

}
