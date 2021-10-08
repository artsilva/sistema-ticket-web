import { StorageService } from './../../../../shared/services/storage/storage.service';
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
  user: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.title = 'SISTEMA TICKET';
    this.setUserName();
  }

  setUserName() {
    const userDetails = this.storageService.getUserSession();
    this.user = `${userDetails.username} ${userDetails.lastnamef} ${userDetails.lastnamem}`;
  }

  emitClickBurger() {
    this.emitToggle.emit('click');
  }
}
