import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../movies/movie";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movie?: Movie;
  searchTerm: string = '';
  public background = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getBackground();
  }

  getBackground() {
    this.movieService.getMostPopular().subscribe(data => this.movie = data.results[0] );
  }

}
