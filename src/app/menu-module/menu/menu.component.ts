import { Nav } from './local-interface/navbar.interface';
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('snav', { static: false }) public sidenav: MatSidenav;

  mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  fillerNav: Nav[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
      this.setMobileQuery();
    }

  ngOnInit() {
    // this.setMobileQuery();
    this.setFillerNav();
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

  setFillerNav() {
    this.fillerNav = [
      { router: 'creacion', label: 'Creación de Ticket', icon: 'plus-white'},
      { router: 'bandeja', label: 'Bandeja de Ticket', icon: 'tray-white' }
    ];
    console.log(this.fillerNav);
  }
}
