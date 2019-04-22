import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student/student.service';
import { EventService } from '../services/events/event.service';
import { IStudent } from 'src/app/core/models/student';
import { IDocument } from '../../core/models/document';

@Component({
  selector: 'so-students-new',
  templateUrl: './students-new.component.html',
  styleUrls: ['./students-new.component.scss']
})
export class StudentsNewComponent implements OnInit {

  /** Student form */
  studentForm: FormGroup;

  /** View only fields */
  viewOnly = false;

  /** Is Update */
  isUpdate = false;

  /** documents list */
  documentList: IDocument[];

  /**
   * Creates an instance of StudentsNewComponent.
   * @param {FormBuilder} fb
   * @memberof StudentsNewComponent
   */
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private eventService: EventService) { 
    this.createEmptyForm();
    this.isUpdate = false;
  }

  /**
   * Create empty form
   *
   * @memberof StudentsNewComponent
   */
  createEmptyForm(): void {
    this.studentForm = this.fb.group({
      id: [-1],
      name: ['', Validators.required],
      category: ['', Validators.required],
      domicile: [false, Validators.required],
      birthCertificate: [false, Validators.required],
      marksheets: [false, Validators.required],
      police: [false, Validators.required],
      passport: [false, Validators.required],
      declaration: [false, Validators.required],
      dob: [new Date(), Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      lastClassScore: ['', Validators.required]
    })
  }

  /**
   * Create Student form
   *
   * @param {IStudent} student
   * @memberof StudentsNewComponent
   */
  createStudentForm(student: IStudent): void {
    this.isUpdate = true;

    this.studentForm = this.fb.group({
      id: student.id,
      name: student.name,
      category: student.category,
      domicile: student.domicile,
      birthCertificate: student.birthCertificate,
      marksheets: student.marksheets,
      police: student.police,
      passport: student.passport,
      declaration: student.declaration,
      dob: student.dob,
      fatherName: student.fatherName,
      motherName: student.motherName,
      lastClassScore: student.lastClassScore
    })
  }

  ngOnInit() {
    this.eventService.getViewStudentEmitter().subscribe((student) => {
      if (student) {
        this.viewOnly = true;
        this.createStudentForm(student);
      }
    });
    this.eventService.getEditStudentEmitter().subscribe((student) => {
      if (student) {
        this.viewOnly = false;
        this.createStudentForm(student);
      }
    });
  }

  /**
   * On submission of the form
   *
   * @memberof StudentsNewComponent
   */
  submit(): void {
    if (this.isUpdate) {
      this.studentService.updateStudent(this.studentForm.value).subscribe();
    } else {
      this.studentService.saveNewStudent(this.studentForm.value).subscribe();
    }
    this.eventService.emitRefreshData();
  }

  /**
   * Cancel new student form
   *
   * @memberof StudentsNewComponent
   */
  cancel(): void {
    this.eventService.emitRefreshData();
  }

  /**
   * on category change
   *
   * @memberof StudentsNewComponent
   */
  onCategoryChange(): void {
    const category = this.studentForm.controls.category.value;
    this.documentList = this.studentService.getDocumentList(category);
  }

}
