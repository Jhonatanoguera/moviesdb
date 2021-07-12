import {Component, Input, OnInit} from '@angular/core';
import {MovieDetails} from "../../movies/movieDetails";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MoviesService} from "../../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {ShowDetails} from "../showDetails";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input() show?: ShowDetails;
  @Input() images?: any[];
  @Input() trailers?: any;
  safeUrlTrailer?: SafeResourceUrl;
  public background = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const showId = String(this.route.snapshot.paramMap.get('id'));
    this.getShow(showId)
    this.getShowImages(showId);
    this.getShowTrailer(showId);
  }

  getShow(id: string) {
    this.movieService.getShowDetails(id)
      .subscribe(
        data => this.show = data);
  }

  getTaglineFormat(overview: string) {
    if(overview) {
      overview = '"' + overview + '"';
    }
    return overview;
  }

  getShowImages(id: string) {
    this.movieService.getShowImages(id)
      .subscribe(
        data => this.images = data.backdrops);
  }

  getShowTrailer(id: string){
    this.movieService.getShowTrailers(id)
      .subscribe(
        data => this.safeUrlTrailer = this.getSafeTrailer(data.results[0].key));
  }

  getSafeTrailer(key: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }
}
