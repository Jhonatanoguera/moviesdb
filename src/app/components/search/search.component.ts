import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  querySearch() {
    this.router.navigate(['/search', this.searchTerm]);
    this.searchTerm = '';
  }

}
