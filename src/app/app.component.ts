import { Icons } from './shared/utils/icons';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sistema-ticket-web';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'user-black',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.BLACK_USER)
    );
    this.matIconRegistry.addSvgIcon(
      'user-white',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.WHITE_USER)
    );
    this.matIconRegistry.addSvgIcon(
      'plus-white',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.WHITE_PLUS)
    );
    this.matIconRegistry.addSvgIcon(
      'tray-white',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.TRAY_WHITE)
    );
    this.matIconRegistry.addSvgIcon(
      'status-green',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.GREEN_STATUS)
    );
    this.matIconRegistry.addSvgIcon(
      'status-blue',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.BLUE_STATUS)
    );
    this.matIconRegistry.addSvgIcon(
      'status-yellow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.YELLOW_STATUS)
    );
    this.matIconRegistry.addSvgIcon(
      'status-red',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.RED_STATUS)
    );
    this.matIconRegistry.addSvgIcon(
      'stop-red',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.RED_STOP)
    );
    this.matIconRegistry.addSvgIcon(
      'pause-yellow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.YELLOW_PAUSE)
    );
    this.matIconRegistry.addSvgIcon(
      'play-green',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.GREEN_PLAY)
    );
    this.matIconRegistry.addSvgIcon(
      'forward-white',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.FORWARD_WHITE)
    );
    this.matIconRegistry.addSvgIcon(
      'file-pdf-blue',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.BLUE_FILE_PDF)
    );
    this.matIconRegistry.addSvgIcon(
      'file-image-blue',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.BLUE_FILE_IMAGE)
    );
    this.matIconRegistry.addSvgIcon(
      'file-text-blue',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.BLUE_FILE_TEXT)
    );
    this.matIconRegistry.addSvgIcon(
      'sla-green',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.GREEN_SLA)
    );
    this.matIconRegistry.addSvgIcon(
      'sla-yellow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.YELLOW_SLA)
    );
    this.matIconRegistry.addSvgIcon(
      'sla-red',
      this.domSanitizer.bypassSecurityTrustResourceUrl(Icons.RED_SLA)
    );
  }
}
