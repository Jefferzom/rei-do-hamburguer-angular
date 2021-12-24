import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerCtoComponent } from './rei-do-hamburguer-cto.component';

describe('ReiDoHamburguerCtoComponent', () => {
  let component: ReiDoHamburguerCtoComponent;
  let fixture: ComponentFixture<ReiDoHamburguerCtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerCtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerCtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
