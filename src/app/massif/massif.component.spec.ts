import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassifComponent } from './massif.component';

describe('MassifComponent', () => {
  let component: MassifComponent;
  let fixture: ComponentFixture<MassifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
