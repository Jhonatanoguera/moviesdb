import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'bfd8866713284f632639f588ac46f16c';

  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<any> {
    const url = this.apiUrl + 'movie/now_playing';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}});
  }

  getMostPopular(): Observable<any> {
    const url = this.apiUrl + 'movie/popular';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}});
  }

  getSearchResult(search: string): Observable<any> {
    const url = this.apiUrl + 'search/multi';
    return this.http
      .get(url,  { params: { api_key: this.apiKey, query: search }} );
  }
}
