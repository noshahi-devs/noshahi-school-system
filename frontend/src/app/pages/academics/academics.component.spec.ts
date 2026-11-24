import { TestBed } from '@angular/core/testing';
import { AcademicsComponent } from './academics.component';

describe('AcademicsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicsComponent]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AcademicsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
