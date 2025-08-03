import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanServices } from './loan-services';

describe('LoanServices', () => {
  let component: LoanServices;
  let fixture: ComponentFixture<LoanServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
