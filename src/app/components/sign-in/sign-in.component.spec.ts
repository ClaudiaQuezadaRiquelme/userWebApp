import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
import { AuthService } from '../../services/auth.service';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  const spyAuthService = jasmine.createSpyObj({ sortNumberData: null });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      providers: [
          { provide: AuthService, useValue: spyAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Default testing
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Our testing
  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  // it('should return model invalid when form is empty', () => {
  //   expect(component.form.valid).toBeFalsy();
  // });
});
