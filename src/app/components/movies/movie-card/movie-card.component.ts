import {Component, Input, OnInit} from '@angular/core';
import {genres_dictionary} from "../../../misc/genres/genres";
import {Movie} from "../movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  loading: boolean = true;
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    this.loading = false;
  }

  transformGenres(genres: any[]): string[] {
    let list = [];
    const total = genres.length;

    if (genres) {
      for (let i = 0; i < total; i++) {
        list.push(genres_dictionary[genres[i]]);
      }
    }

    if(list.length > 4){
      list = list.slice(1, 4);
    }

    return list;
  }

}
