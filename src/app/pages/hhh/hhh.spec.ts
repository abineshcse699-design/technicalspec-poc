import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hhh } from './hhh';

describe('Hhh', () => {
  let component: Hhh;
  let fixture: ComponentFixture<Hhh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hhh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hhh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
