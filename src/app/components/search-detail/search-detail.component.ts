import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {

  @Input() search?: any[];
  @Input() movie?: any[] = [];
  @Input() actor?: any[] = [];
  @Input() show?: any[] = [];

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
     this.getValue();
    })
  }

  getValue() {
    const query = String(this.route.snapshot.paramMap.get('query'));
    this.movieService.getSearchResult(query)
      .subscribe(
        data => {
          this.search = data.results;
          this.movie = this.getMovies(this.search);
          this.show = this.getShows(this.search);
          this.actor = this.getPeople(this.search);
        });
  }

  getMovies(query: any): any[]{
    const total = query.length
    const movies: any[] = [];
    for (let i = 0; i < total; i++) {
      if (query[i]['media_type'] === 'movie') {
        movies.push(query[i]);
      }
    }
    console.log('finished movies');
    return movies;
  }

  getShows(query: any): any[]{
    const total = query.length
    const shows: any[] = [];
    for (let i = 0; i < total; i++) {
      if (query[i]['media_type'] === 'tv') {
        shows.push(query[i]);
      }
    }
    return shows;
  }

  getPeople(query: any): any[]{
    const total = query.length
    const actors: any[] = [];
    for (let i = 0; i < total; i++) {
      if (query[i]['media_type'] === 'person') {
        actors.push(query[i]);
      }
    }
    return actors;
  }

}
