import { Injectable } from '@angular/core';
import { enviroment } from '../shared/enviroment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private readonly url = enviroment.uri;
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }


  public get header(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'x-api-key': enviroment.apikey })
    }
  }

  getDogsBreed() {
    return this.http
      .get<any>(
        `${this.url}breeds`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }

  getBreedDetails(breedId: string) {
    return this.http
      .get<any>(
        `${this.url}breeds/${breedId}`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }

  searchdogsByBreed(breedId: string) {
    return this.http
      .get<any>(
        `${this.url}breeds/search?q=${breedId}`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }
}
