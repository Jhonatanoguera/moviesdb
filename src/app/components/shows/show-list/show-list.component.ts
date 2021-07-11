import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {Show} from "../show";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  shows: Show[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.movieService.getMostPopularShows().subscribe(data => this.shows = data.results );
  }

}
