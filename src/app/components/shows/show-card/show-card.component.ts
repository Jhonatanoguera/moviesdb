import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../show";
import {genres_dictionary} from "../../../misc/genres/genres";

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  loading: boolean = true;
  @Input() show!: Show;

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

    if(list.length > 3){
      list = list.slice(0, 3);
    }

    return list;
  }

}
