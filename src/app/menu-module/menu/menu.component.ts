import { Constants } from './../../shared/utils/Constants';
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('snav', { static: false }) public sidenav: MatSidenav;

  mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  fillerNav: {router: string, label: string}[] = [];
  fillerContent = Array.from(
    { length: 7 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
      this.iconRegistry.addSvgIcon('create', this.sanitizer.bypassSecurityTrustResourceUrl(Constants.ICON_USER));
  }

  ngOnInit() {
    this.setMobileQuery();
    this.fillerNav = [
      {router: 'creacion', label: 'Creación de Ticket'},
      {router: 'menu/creacion', label: 'Anulación de Ticket'},
      {router: 'menu/creacion', label: 'Asignación de Ticket'}
    ];
    console.log(this.fillerNav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  eventoClickHeader() {
    console.log('click');
    this.sidenav.toggle();
  }

  setMobileQuery() {
    this.mobileQuery = this.media.matchMedia('max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }
}
