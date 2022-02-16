import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // mockup data
  movies = ['Terminator', 'Predator'];

  constructor(private apiService: ApiService) {  }

  ngOnInit(): void {
  }

}
