import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {genres_dictionary} from "../../misc/genres/genres";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  movies: any[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.getMovies();
  }

  onLoad() {
    this.loading = false;
  }

  getMovies() {
    this.movieService.getRequest().subscribe(data => this.movies = data.results );
  }

  transformGenres(genres: any[]): string[] {
    let list = [];
    const total = genres.length;

    if (genres) {
      for (let i = 0; i < total; i++) {
        list.push(genres_dictionary[genres[i]]);
        }
      }
    return list;
    }
}
