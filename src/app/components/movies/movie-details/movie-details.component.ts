import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {MovieDetails} from "../movieDetails";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie?: MovieDetails;
  @Input() images?: any[];
  @Input() trailers?: any;
  safeUrlTrailer?: SafeResourceUrl;
  public background = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const movieId = String(this.route.snapshot.paramMap.get('id'));
    this.getMovie(movieId)
    this.getMovieImages(movieId);
    this.getMovieTrailer(movieId);
  }

  getMovie(id: string) {
    this.movieService.getMovieDetails(id)
      .subscribe(
        data => this.movie = data);
  }

  getTaglineFormat(overview: string) {
    if(overview) {
      overview = '"' + overview + '"';
    }
    return overview;
  }

  getMovieImages(id: string) {
    this.movieService.getMovieImages(id)
      .subscribe(
        data => this.images = data.backdrops);
  }

  getMovieTrailer(id: string){
    this.movieService.getMovieTrailers(id)
      .subscribe(
        data => this.safeUrlTrailer = this.getSafeTrailer(data.results[0].key));
  }

  getSafeTrailer(key: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }
}
