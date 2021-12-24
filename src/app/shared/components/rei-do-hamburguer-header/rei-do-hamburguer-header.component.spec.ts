import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerHeaderComponent } from './rei-do-hamburguer-header.component';

describe('ReiDoHamburguerHeaderComponent', () => {
  let component: ReiDoHamburguerHeaderComponent;
  let fixture: ComponentFixture<ReiDoHamburguerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
