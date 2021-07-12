import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../movies/movie";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  movie?: Movie;
  public background = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MoviesService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBackground();
  }

  addSingle() {
    this.messageService.add({
      key: 'myKey1',
      severity:'custom',
      summary:'Hey there!',
      detail:'Use the navbar behind me to start navigating through the page!',
      icon: 'pi-thumbs-up'});
  }

  getBackground() {
    this.movieService.getMostPopularMovies().subscribe(data => this.movie = data.results[0] );
  }
}
