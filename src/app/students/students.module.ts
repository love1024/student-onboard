import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsHomeComponent } from './students-home/students-home.component';
import { RouterModule } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentsNewComponent } from './students-new/students-new.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [StudentsHomeComponent, StudentCardComponent, StudentsNewComponent, StudentListComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'students', component: StudentsHomeComponent }
    ])
  ]
})
export class StudentsModule { }
