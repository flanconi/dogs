import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { DogsBreed } from '../../../shared/model/dogsBreed.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  breeds: DogsBreed[] = [];
  breedSelected: DogsBreed | null = null;
  breedFiltered: DogsBreed[] = [];

  constructor(private dogService: DogService) { }

  public get breedList() : DogsBreed[] {
    return this.breedSelected? this.breedFiltered : this.breeds;
  }
  
  ngOnInit() {
    this.dogService.getDogsBreed().subscribe({
      next: (data: DogsBreed[]) => {
        this.breeds = data;
      }
    });
  }

  onBreedChange(breed: DogsBreed | null) {
    if (!breed) {
      this.breedFiltered = [];
      return;
    }

    this.dogService.searchDogsByBreed(breed?.name).subscribe({
      next: (data: any) => {
        this.breedFiltered = data;        
      }
    });
  }

  getDogDetails(breedId: number) {
    this.dogService.getBreedDetails(breedId).subscribe({
      next: (data: any) => {
        console.log(data);
      }
    });
  }

  deleteBreed(breed: DogsBreed) {
    const indexOfbreed = this.breeds.indexOf(breed);
    this.breeds = this.breeds.splice(indexOfbreed, 1);
  }
}
  