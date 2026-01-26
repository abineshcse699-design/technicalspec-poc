import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageComponent } from './s-page';

describe('SPage', () => {
  let component: SPageComponent;
  let fixture: ComponentFixture<SPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
