import { Component, OnInit } from '@angular/core';
import { TvShows } from '../../models/tvshows';
import { Movie, MovieDto } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: TvShows[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response)=>{
        this.popularMovies = response;    
    });
    this.moviesService.getMovies('top_rated').subscribe((response)=>{
      this.topRatedMovies = response;    
  });
  this.moviesService.getMovies('upcoming').subscribe((response)=>{
    this.upcomingMovies = response;    
});

this.moviesService.getTvs('popular').subscribe((response)=>{
  this.popularTvShows = response;    
});
  }
}
