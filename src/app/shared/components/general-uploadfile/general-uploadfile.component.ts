import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-general-uploadfile',
  templateUrl: './general-uploadfile.component.html',
  styleUrls: ['./general-uploadfile.component.css']
})
export class GeneralUploadfileComponent implements OnInit {

  isHovering: boolean;
  buttonValue: string;

  @Output()
  emitter = new EventEmitter<Blob[]>();

  @Input() files: Blob[];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    // private solicitudService: SolicitudService
  ) {
    // iconRegistry.addSvgIcon('description', sanitizer.bypassSecurityTrustResourceUrl(Constants.ICON_DESCRIPTION));
    // iconRegistry.addSvgIcon('backup', sanitizer.bypassSecurityTrustResourceUrl(Constants.ICON_BACKUP));
    // iconRegistry.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl(Constants.ICON_CANCEL));
  }

  ngOnInit() {
    this.buttonValue = 'X';
  }

  toggleHover(event: boolean) {
    console.log('hover');
    this.isHovering = event;
  }

  onDrop(files: Blob[]) {
    for (const file of files) {
      this.files.push(file);
    }
    this.emitter.emit(this.files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.emitter.emit(this.files);
  }

  onLimpiar() {
    this.files = [];
  }


}
