import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
