import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiDoHamburguerFooterComponent } from './rei-do-hamburguer-footer.component';

describe('ReiDoHamburguerFooterComponent', () => {
  let component: ReiDoHamburguerFooterComponent;
  let fixture: ComponentFixture<ReiDoHamburguerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiDoHamburguerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiDoHamburguerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
