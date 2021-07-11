import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {genres_dictionary} from "../../../misc/genres/genres";

@Component({
  selector: 'app-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  movies: any[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getNowPlaying().subscribe(data => this.movies = data.results );
  }
}
