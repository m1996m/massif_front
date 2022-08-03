import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatMassifComponent } from './creat-massif.component';

describe('CreatMassifComponent', () => {
  let component: CreatMassifComponent;
  let fixture: ComponentFixture<CreatMassifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatMassifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatMassifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
