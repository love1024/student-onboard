import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHomeComponent } from './login-home/login-home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Login Module
 * Contains Functionality related to login
 * @export
 * @class LoginModule
 */
@NgModule({
  declarations: [LoginHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginHomeComponent }
    ])
  ]
})
export class LoginModule { }
