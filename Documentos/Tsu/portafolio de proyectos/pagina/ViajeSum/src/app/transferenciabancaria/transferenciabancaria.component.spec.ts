import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciabancariaComponent } from './transferenciabancaria.component';

describe('TransferenciabancariaComponent', () => {
  let component: TransferenciabancariaComponent;
  let fixture: ComponentFixture<TransferenciabancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferenciabancariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
