import { Component, OnInit } from '@angular/core';
import {Actor} from "../actor";
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  actors: Actor[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.movieService.getMostPopularActors().subscribe(data => this.actors = data.results );
  }
}
