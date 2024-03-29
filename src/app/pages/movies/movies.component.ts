import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenres(genreId, 1);
      } else {
        this.getPagedMovie(1);
      }
    });
  }
  getMoviesByGenres(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getPagedMovie(page: number, searchKeyword?: string ) {
    this.moviesService.searchMovies(page,searchKeyword).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    if (this.genreId) {
      this.getMoviesByGenres(this.genreId, event.page + 1);
    } else {
      if(this.searchValue){

      this.getPagedMovie(event.page + 1,this.searchValue);
      }else{
        this.getPagedMovie(event.page + 1);
      }
    }
  }

  searchChanged(){
    if(this.searchValue){
      this.getPagedMovie(1, this.searchValue);
    }
   
  }
}
