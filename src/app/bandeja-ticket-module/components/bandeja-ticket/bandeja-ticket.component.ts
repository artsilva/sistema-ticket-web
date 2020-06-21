import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeja-ticket',
  templateUrl: './bandeja-ticket.component.html',
  styleUrls: ['./bandeja-ticket.component.css']
})
export class BandejaTicketComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'bandeja de tickets';
  }

}
