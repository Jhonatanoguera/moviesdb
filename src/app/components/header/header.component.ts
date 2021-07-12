import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Movies',
        icon: 'pi pi-fw pi-video',
        routerLink:"index"
      },
      {
        label: 'Actor',
        icon: 'pi pi-fw pi-user',
        routerLink:"actors"
      },
      {
        label: 'Shows',
        icon: 'pi pi-fw pi-youtube',
        routerLink:"shows"
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-question',
        routerLink:"about"
      },
      {
        icon: 'pi pi-fw pi-undo',
        command: () => this.goBack()
      }
    ];
  }

  goBack(){
    this.location.back();
  }

}
