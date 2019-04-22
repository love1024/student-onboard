import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHomeComponent } from './login-home.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
