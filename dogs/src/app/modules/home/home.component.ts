import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { DogsBreed, DogsBreedDetails } from '../../../shared/model/dogsBreed.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalDogsInfoComponent } from '../../../components/modal-dogs-info/modal-dogs-info.component';
import { ModalFormComponent } from '../../modal-form/modal-form.component';

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
  breedDetailed: DogsBreedDetails | null = null; 
  breedFiltered: DogsBreed[] = [];
  constructor(
    private dogService: DogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dogService.getDogsBreed().subscribe({
      next: (data: DogsBreed[]) => {
        this.breeds = data;
        console.log(this.breeds);
        
      }
    });
  }

  public get breedList(): DogsBreed[] {
    return this.breedSelected ? this.breedFiltered : this.breeds;
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

  getDogDetails(breed:DogsBreed) {
    this.dogService.getBreedDetails(breed.id).subscribe({
      next: (data: DogsBreedDetails) => {
        this.breedDetailed = data;
        this.breedDetailed.reference_image_id = breed.image.url;
      }
    });
  }

  openDogInfo(breed: DogsBreed) {
    this.getDogDetails(breed);
    const dialogRef = this.dialog.open(ModalDogsInfoComponent, {
      width: '400px',
      data: this.breedDetailed
    });
  }

  deleteBreed(breed: DogsBreed) {
    const indexOfbreed = this.breeds.indexOf(breed);
    this.breeds.splice(indexOfbreed, 1);
  }
}
