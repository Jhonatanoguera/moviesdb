import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  movie: boolean = false;
  actor: boolean = false;
  show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  available(enable1: boolean, enable2:boolean): boolean {
    return (enable1 || enable2);
  }

  querySearch() {
    if(this.movie){
      this.router.navigate(['/search', 'movies', this.searchTerm]);
    } else if(this.show) {
      this.router.navigate(['/search', 'shows', this.searchTerm]);
    } else if(this.actor){
      this.router.navigate(['/search', 'actors', this.searchTerm]);
    } else {
      this.router.navigate(['/search', this.searchTerm]);
    }
    this.searchTerm = '';
  }
}
