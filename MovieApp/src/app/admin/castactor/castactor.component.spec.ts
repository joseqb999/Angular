import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastactorComponent } from './castactor.component';

describe('CastactorComponent', () => {
  let component: CastactorComponent;
  let fixture: ComponentFixture<CastactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
