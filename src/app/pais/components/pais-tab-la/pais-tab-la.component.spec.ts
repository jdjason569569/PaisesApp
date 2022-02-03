import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTabLAComponent } from './pais-tab-la.component';

describe('PaisTabLAComponent', () => {
  let component: PaisTabLAComponent;
  let fixture: ComponentFixture<PaisTabLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisTabLAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTabLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
