import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() sidenav!: MatSidenav;

  ngOnInit(): void {
  }
  public openSideNav(){
    this.sidenav.toggle();
  }


}
