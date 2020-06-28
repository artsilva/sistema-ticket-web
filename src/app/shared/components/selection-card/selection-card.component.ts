import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent implements OnInit {

  @Input()
  cardTitle: string;

  @Input()
  selected: boolean;

  @Input()
  cardNumber: string;

  letter: string;

  constructor() { }

  ngOnInit() {
    this.letter = this.cardTitle.substring(0, 1);
  }

}
