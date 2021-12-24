import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerLocalizeComponent } from './rei-do-hamburguer-localize.component';

describe('ReiDoHamburguerLocalizeComponent', () => {
  let component: ReiDoHamburguerLocalizeComponent;
  let fixture: ComponentFixture<ReiDoHamburguerLocalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerLocalizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerLocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
