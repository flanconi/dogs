import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDogsInfoComponent } from './modal-dogs-info.component';

describe('ModalDogsInfoComponent', () => {
  let component: ModalDogsInfoComponent;
  let fixture: ComponentFixture<ModalDogsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDogsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDogsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
