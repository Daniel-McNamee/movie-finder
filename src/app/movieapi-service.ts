import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './models/moviedetails.interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  private http = inject(HttpClient);

  private movie = signal<MovieDetails | null>(null);

  setMovie(movie: MovieDetails) {
    this.movie.set(movie);
  }

  movieData() {
    return this.movie;
  }

  private baseUrl = 'https://www.omdbapi.com/';
  private apiKey = '3dc3e334';

  getMovie(title: string) {

    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=${title}`;

    return this.http.get<MovieDetails>(url).pipe(take(1));

  }
}