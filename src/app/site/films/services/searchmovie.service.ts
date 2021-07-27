import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService {
  constructor(private http: HttpClient) { }
  search(action: any, title: string, year: number = 0): void {
    let results = {};
    let y = year ? `&y=${year}` : '';
    this.http.
      get(`http://www.omdbapi.com/?apikey=b267f2ad&t=${title}${y}&plot=full`).pipe(catchError(()=>of('fff')))
      .subscribe(
        (response) => {
          action(response);
        }
      )
  }
}