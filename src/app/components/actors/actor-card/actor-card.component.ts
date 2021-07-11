import {Component, Input, OnInit} from '@angular/core';
import {genres_dictionary} from "../../../misc/genres/genres";
import {Actor} from "../actor";

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

  loading: boolean = true;
  @Input() actor!: Actor;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    this.loading = false;
  }
}
