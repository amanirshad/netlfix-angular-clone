import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a67d717cb525beee5b05921973aab6b1';

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming'){
      return this.http.get<MovieDto>(
        `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
      )
  }
}
