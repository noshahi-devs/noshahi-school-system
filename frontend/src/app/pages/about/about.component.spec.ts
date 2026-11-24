import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
