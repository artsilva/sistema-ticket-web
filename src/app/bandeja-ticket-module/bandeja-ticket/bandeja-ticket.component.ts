import { AreaService } from './../../shared/services/area/area.service';
import { Area } from './../../shared/models/area';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeja-ticket',
  templateUrl: './bandeja-ticket.component.html',
  styleUrls: ['./bandeja-ticket.component.css']
})
export class BandejaTicketComponent implements OnInit {

  title: string;
  quantityAreas: Area[] = [];

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.title = 'bandeja de tickets';
    this.areaService.getAreasByQuantity().subscribe(
      data => {
        this.quantityAreas = data;
      }
    );
  }

}
