import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DogsBreedDetails } from '../../shared/model/dogsBreed.model';

@Component({
  selector: 'app-modal-dogs-info',
  standalone: true,
  imports: [],
  templateUrl: './modal-dogs-info.component.html',
  styleUrl: './modal-dogs-info.component.scss'
})
export class ModalDogsInfoComponent {
  imageUrl: string | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DogsBreedDetails) {  }

}
