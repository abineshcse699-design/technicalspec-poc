import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequiredComponent } from './s-page';

describe('SPage', () => {
  let component: MaterialRequiredComponent;
  let fixture: ComponentFixture<MaterialRequiredComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialRequiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequiredComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
