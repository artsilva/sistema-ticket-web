import { AuthService } from './../../../../auth/services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  emitToggle: EventEmitter<string> = new EventEmitter<string>();
  title: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.title = 'SISTEMA TICKET';
  }

  emitClickBurger() {
    this.emitToggle.emit('click');
  }
}
