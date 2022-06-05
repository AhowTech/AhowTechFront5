import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliocarruselComponent } from './portafoliocarrusel.component';

describe('PortafoliocarruselComponent', () => {
  let component: PortafoliocarruselComponent;
  let fixture: ComponentFixture<PortafoliocarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafoliocarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliocarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
