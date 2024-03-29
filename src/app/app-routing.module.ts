import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'tvshows',
    component: TvShowsComponent
  },{
    path: 'tvshows/:id',
    component: TvshowComponent
  },{
    path: 'tvshows/genres/:genreId',
    component: TvShowsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
