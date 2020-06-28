import { AttachedFile } from './../../models/file';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attachment-card',
  templateUrl: './attachment-card.component.html',
  styleUrls: ['./attachment-card.component.css']
})
export class AttachmentCardComponent implements OnInit {

  @Input()
  file: AttachedFile;

  constructor() { }

  ngOnInit() {
  }

  download() {
    console.log('descarga');
  }

}
