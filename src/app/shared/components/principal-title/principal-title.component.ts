import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal-title',
  templateUrl: './principal-title.component.html',
  styleUrls: ['./principal-title.component.css']
})
export class PrincipalTitleComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
