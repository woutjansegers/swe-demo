import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweDemoAppUi } from './swe-demo-app-ui';

describe('SweDemoAppUi', () => {
  let component: SweDemoAppUi;
  let fixture: ComponentFixture<SweDemoAppUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweDemoAppUi],
    }).compileComponents();

    fixture = TestBed.createComponent(SweDemoAppUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
