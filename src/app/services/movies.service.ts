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

  getRequest(): Observable<any> {
    const url = this.apiUrl + 'movie/now_playing';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}});
  }
}
