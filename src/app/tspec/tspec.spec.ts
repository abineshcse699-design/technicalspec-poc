import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tspec } from './tspec';

describe('Tspec', () => {

  let component: Tspec;
  let fixture: ComponentFixture<Tspec>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [Tspec]
    })

    .compileComponents();

    fixture = TestBed.createComponent(Tspec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


