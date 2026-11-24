import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GenericComponent } from './generic.component';

describe('GenericComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GenericComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
