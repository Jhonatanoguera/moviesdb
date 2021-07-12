import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";


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
      .get(url,  { params: { api_key: this.apiKey}})
      .pipe(
        catchError(this.handleError<any>(`GetNowPlaying` , []))
      );
  }

  getMostPopularMovies(): Observable<any> {
    const url = this.apiUrl + 'movie/popular';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}})
      .pipe(
        catchError(this.handleError<any>(`GetMostPopularMovies` , []))
      );
  }

  getMostPopularActors(): Observable<any> {
    const url = this.apiUrl + 'person/popular';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}})
      .pipe(
        catchError(this.handleError<any>(`GetMostPopularActors` , []))
      );
  }

  getMostPopularShows(): Observable<any> {
    const url = this.apiUrl + 'tv/popular';
    return this.http
      .get(url,  { params: { api_key: this.apiKey}})
      .pipe(
        catchError(this.handleError<any>(`GetMostPopularShows` , []))
      );
  }

  getSearchResult(search: string): Observable<any> {
    const url = this.apiUrl + 'search/multi';
    return this.http
      .get(url,  { params: { api_key: this.apiKey, query: search }} )
      .pipe(
        catchError(this.handleError<any>(`GetSearchResult` , []))
      );
  }

  getSearchMoviesResult(search: string): Observable<any> {
    const url = this.apiUrl + 'search/movie';
    return this.http
      .get(url,  { params: { api_key: this.apiKey, query: search }} )
      .pipe(
        catchError(this.handleError<any>(`GetSearchMoviesResult` , []))
      );
  }

  getSearchPersonResult(search: string): Observable<any> {
    const url = this.apiUrl + 'search/person';
    return this.http
      .get(url,  { params: { api_key: this.apiKey, query: search }} )
      .pipe(
        catchError(this.handleError<any>(`GetSearchPersonResult` , []))
      );
  }

  getSearchShowResult(search: string): Observable<any> {
    const url = this.apiUrl + 'search/tv';
    return this.http
      .get(url,  { params: { api_key: this.apiKey, query: search }} )
      .pipe(
        catchError(this.handleError<any>(`GetSearchShowResult` , []))
      );
  }

  getMovieDetails(id: string): Observable<any> {
    const url = this.apiUrl + 'movie/' + id + '?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetMovieDetails` , []))
      );
  }

  getPersonDetails(id: string): Observable<any> {
    const url = this.apiUrl + 'person/' + id + '?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetPersonDetails` , []))
      );
  }

  getShowDetails(id: string): Observable<any> {
    const url = this.apiUrl + 'tv/' + id + '?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetShowDetails` , []))
      );
  }

  getPersonCredits(id: string): Observable<any> {
    const url = this.apiUrl + 'person/' + id + '/combined_credits?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetPersonCredits` , []))
      );
  }

  getMovieImages(id: string): Observable<any> {
    const url = this.apiUrl + 'movie/' + id + '/images?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetMovieImages` , []))
      );
  }

  getPersonImages(id: string): Observable<any> {
    const url = this.apiUrl + 'person/' + id + '/images?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetPersonImages` , []))
      );
  }

  getShowImages(id: string): Observable<any> {
    const url = this.apiUrl + 'tv/' + id + '/images?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetShowImages` , []))
      );
  }

  getMovieTrailers(id: string): Observable<any> {
    const url = this.apiUrl + 'movie/' + id + '/videos?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetMovieTrailers` , []))
      );
  }

  getShowTrailers(id: string): Observable<any> {
    const url = this.apiUrl + 'tv/' + id + '/videos?';
    return this.http
      .get(url,  { params: { api_key: this.apiKey }} )
      .pipe(
        catchError(this.handleError<any>(`GetShowTrailers` , []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
