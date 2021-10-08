import { AttachedFile } from './../../../shared/models/file';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment-ticket',
  templateUrl: './attachment-ticket.component.html',
  styleUrls: ['./attachment-ticket.component.css']
})
export class AttachmentTicketComponent implements OnInit {

  files: AttachedFile[];

  constructor() { }

  ngOnInit() {
    this.files = [
      { code: 1, name: 'Solicitud Inscripcion.pdf', type: 'pdf' },
      { code: 2, name: 'foto lugar de trabajo.jpeg', type: 'image' }
    ];
  }

}
