import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getNowPlaying().subscribe(data => this.movies = data.results );
  }
}
