import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierFruitsComponent } from './panier-fruits.component';

describe('PanierFruitsComponent', () => {
  let component: PanierFruitsComponent;
  let fixture: ComponentFixture<PanierFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
