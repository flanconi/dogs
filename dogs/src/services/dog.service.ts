import { Injectable } from '@angular/core';
import { enviroment } from '../shared/enviroment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { DogsBreed, DogsBreedDetails } from '../shared/model/dogsBreed.model';

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
      .get<DogsBreed[]>(
        `${this.url}breeds`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }

  getBreedDetails(breedId: number) {
    return this.http
      .get<DogsBreedDetails>(
        `${this.url}breeds/${breedId}`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }

  searchDogsByBreed(breed: string) {
    return this.http
      .get<DogsBreed[]>(
        `${this.url}breeds/search?q=${breed}`, this.header
      )
      .pipe(takeUntil(this.unsubscribe$));
  }
}
