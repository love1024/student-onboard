import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATH } from 'src/app/app.constants';
import { EventService } from '../../students/services/events/event.service';

@Component({
  selector: 'so-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent {

  /** Login form */
  loginForm: FormGroup;
  

  /**
   * Creates an instance of LoginHomeComponent.
   * @param {FormBuilder} fb
   * @memberof LoginHomeComponent
   */
  constructor(private fb: FormBuilder, private router: Router, private eventService: EventService) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  /**
   * on click of login button
   *
   * @memberof LoginHomeComponent
   */
  login(): void {
    this.eventService.emitUser(this.loginForm.value.username);
    this.router.navigateByUrl(PATH.STUDENTS);
  }

}
