import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DogsBreedDetails } from '../../shared/model/dogsBreed.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-modify-breed',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-modify-breed.component.html',
  styleUrl: './add-modify-breed.component.scss'
})
export class AddModifyBreedComponent {
  imageUrl: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DogsBreedDetails,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddModifyBreedComponent>
  ) { }

  form: FormGroup = this.fb.group({
    id: [this.data.id],
    name: [this.data.name, [Validators.required]],
    origin: [this.data.origin, [Validators.required]],
    lifeSpan: [this.data.life_span, [Validators.required]],
    temperament: [this.data.temperament, [Validators.required]],
    bredFor: [this.data.bred_for, [Validators.required]],
    breadGroup: [this.data.breed_group, [Validators.required]],
    referenceImageId: [this.data.reference_image_id, [Validators.required]],
  });

  closeAndSave() {
    const formData = this.form.value;
    this.dialogRef.close(formData);
  }
}
