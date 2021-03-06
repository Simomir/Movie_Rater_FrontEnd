import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = new Array();

  constructor(private apiService: ApiService) {  }

  ngOnInit() {
    return this.apiService.getMovies().subscribe({
      next: (data: any) => this.movies = data,
      error: (error: Error) => console.error(error)
    });
  }

}
