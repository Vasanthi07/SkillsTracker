import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssociateComponent } from './search-associate.component';

describe('SearchAssociateComponent', () => {
  let component: SearchAssociateComponent;
  let fixture: ComponentFixture<SearchAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
