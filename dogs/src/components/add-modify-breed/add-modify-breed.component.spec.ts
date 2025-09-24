import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyBreedComponent } from './add-modify-breed.component';

describe('AddModifyBreedComponent', () => {
  let component: AddModifyBreedComponent;
  let fixture: ComponentFixture<AddModifyBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModifyBreedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModifyBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
