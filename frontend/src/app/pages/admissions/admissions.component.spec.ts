import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AdmissionsComponent } from './admissions.component';

describe('AdmissionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionsComponent],
      providers: [provideHttpClient()]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AdmissionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
