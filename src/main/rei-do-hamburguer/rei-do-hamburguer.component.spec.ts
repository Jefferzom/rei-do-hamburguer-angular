import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerComponent } from './rei-do-hamburguer.component';

describe('ReiDoHamburguerComponent', () => {
  let component: ReiDoHamburguerComponent;
  let fixture: ComponentFixture<ReiDoHamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
