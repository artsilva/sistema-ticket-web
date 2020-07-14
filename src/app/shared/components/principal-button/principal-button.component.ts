import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.css']
})
export class PrincipalButtonComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  primary: boolean;

  @Input()
  disable: boolean;

  @Output()
  eventButton = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  buttonPressed() {
    this.eventButton.emit(true);
  }
}
