import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { DogsBreed, DogsBreedDetails } from '../../../shared/model/dogsBreed.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalDogsInfoComponent } from '../../../components/modal-dogs-info/modal-dogs-info.component';
import { AddModifyBreedComponent } from '../../../components/add-modify-breed/add-modify-breed.component';

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

  async getDogDetailsAsync(breed: DogsBreed): Promise<DogsBreedDetails> {
    return new Promise((resolve, reject) => {
      this.dogService.getBreedDetails(breed.id).subscribe({
        next: (data: DogsBreedDetails) => {
          data.reference_image_id = breed.image.url;
          this.breedDetailed = data;
          resolve(data);
        },
        error: err => reject(err)
      });
    });
  }

  async openDogInfo(breed: DogsBreed) {
    const details = await this.getDogDetailsAsync(breed);
    const dialogRef = this.dialog.open(ModalDogsInfoComponent, {
      width: '400px',
      data: details
    });
  }

  async openAddModifyBreed(breed: DogsBreed) {
    const details = await this.getDogDetailsAsync(breed);
    const dialogRef = this.dialog.open(AddModifyBreedComponent, {
      width: '950px',
      height: '600px',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      this.breeds = this.breeds.map(breedItem => {
        if (breedItem.id === result.id) {
          return { ...breedItem, ...result };
        }
        return breedItem;
      });
    });
  }

  createNewBreed() {
    const dialogRef = this.dialog.open(AddModifyBreedComponent, {
      width: '950px',
      height: '600px',
      data: {
        id: null,
        name: '',
        origin: '',
        life_span: '',
        temperament: '',
        bred_for: '',
        breed_group: '',
        reference_image_id: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let newBreed: DogsBreed = {
        id: this.breeds.length + 1,
        name: result.name,
        origin: result.origin,
        breed_group: result.breed_group,
        image: { url: result.referenceImageId, id: result.referenceImageId, width: 0, height: 0 }
      };      
      this.breeds.unshift(newBreed);
    });
  }

  deleteBreed(breed: DogsBreed) {
    const indexOfbreed = this.breeds.indexOf(breed);
    this.breeds.splice(indexOfbreed, 1);
  }
}
