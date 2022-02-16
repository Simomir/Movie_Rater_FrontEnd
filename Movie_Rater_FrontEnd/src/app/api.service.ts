import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token b2cd2eed2bba2a33c6389a008982129261714afe'
  });

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get(this.baseUrl, {headers: this.headers});
  }
}
