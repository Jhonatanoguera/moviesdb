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
  @Input() movieR: boolean = false;
  @Input() actorR: boolean = false;
  @Input() showR: boolean = false;
  index: number = 0;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
     this.getValue();
    })
  }


  getValue() {
    const query = String(this.route.snapshot.paramMap.get('query'));
    const type = String(this.route.snapshot.paramMap.get('type'));

    if(type === 'movies'){
      this.movieR = false;
      this.actorR = true;
      this.showR = true;
      this.index = 0;

      this.movieService.getSearchMoviesResult(query)
        .subscribe(
          data => this.movie = data.results );

    } else if(type === 'shows'){
      this.movieR = true;
      this.actorR = true;
      this.showR = false;
      this.index = 1;

      this.movieService.getSearchShowResult(query)
        .subscribe(
          data => this.show = data.results );

    } else if(type === 'actors'){
      this.movieR = true;
      this.actorR = false;
      this.showR = true;
      this.index = 2;

      this.movieService.getSearchPersonResult(query)
        .subscribe(
          data => this.actor = data.results );
    } else {
      this.movieService.getSearchResult(query)
        .subscribe(
          data => {
            this.search = data.results;
            this.movie = this.getMovies(this.search);
            this.show = this.getShows(this.search);
            this.actor = this.getPeople(this.search);
          });
    }
  }

  getMovies(query: any): any[]{
    const total = query.length
    const movies: any[] = [];
    for (let i = 0; i < total; i++) {
      if (query[i]['media_type'] === 'movie') {
        movies.push(query[i]);
      }
    }
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
