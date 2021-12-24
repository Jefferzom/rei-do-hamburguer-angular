import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerInformationComponent } from './rei-do-hamburguer-information.component';

describe('ReiDoHamburguerInformationComponent', () => {
  let component: ReiDoHamburguerInformationComponent;
  let fixture: ComponentFixture<ReiDoHamburguerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
