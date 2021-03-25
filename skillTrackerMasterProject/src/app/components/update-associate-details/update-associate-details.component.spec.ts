import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssociateDetailsComponent } from './update-associate-details.component';

describe('UpdateAssociateDetailsComponent', () => {
  let component: UpdateAssociateDetailsComponent;
  let fixture: ComponentFixture<UpdateAssociateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssociateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssociateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
