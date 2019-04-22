import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student/student.service';
import { IStudent } from '../../core/models/student';
import { EventService } from '../services/events/event.service';
import { CATERGORY } from '../../app.constants';

@Component({
  selector: 'so-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.scss']
})
export class StudentsHomeComponent implements OnInit {
  
  /** Create a new contact */
  createNew: boolean = false;

  /** Category of student */
  category: string = CATERGORY.ALL;

  /** Search field */
  search: string = '';

  /** Show delete confirmation box */
  showDeleteConfirmation: boolean = false;

  /** Id of student to delete */
  studentToDelete: number;

  /**
   * Creates an instance of StudentsHomeComponent.
   * @param {StudentService} studentService
   * @memberof StudentsHomeComponent
   */
  constructor(private eventService: EventService, private studentService: StudentService) { }

  /**
   * Angular lifecycle hook
   *
   * @memberof StudentsHomeComponent
   */
  ngOnInit() {
    this.eventService.getRefreshDataEmitter().subscribe(() => {
      this.createNew = false;
    });
    this.eventService.getEditStudentEmitter().subscribe((student) => {
      if (student) {
        this.createNew = true;
      }
    });
    this.eventService.getViewStudentEmitter().subscribe((student) => {
      if (student) {
        this.createNew = true;
      }
    });
    this.eventService.getDeleteEmitter().subscribe((id) => {
      if (id) {
        this.studentToDelete = id;
        this.showDeleteConfirmation = true;
      }
    });
  }

  /**
   * Open form to create new student
   *
   * @memberof StudentsHomeComponent
   */
  createNewStudent(): void {
    this.eventService.emitEditStudent(null);
    this.eventService.emitViewStudent(null);
    this.createNew = true;
  }

  /**
   * On student category change
   *
   * @memberof StudentsHomeComponent
   */
  onCategoryChange(): void {
    this.eventService.emitFilterCategory(this.category);
  }

  /**
   * ON serach fields change
   *
   * @memberof StudentsHomeComponent
   */
  onSearchChange(): void {
    this.eventService.emitSearchFilter(this.search);
  }

  /**
   * On delete cancel
   *
   * @memberof StudentsHomeComponent
   */
  onDeleteCancel(): void {
    this.showDeleteConfirmation = false;
    this.studentToDelete = undefined;
  }

  /**
   * On delete button clicked
   *
   * @memberof StudentsHomeComponent
   */
  onDelete(): void {
    this.studentService.deleteStudent(this.studentToDelete).subscribe();
    this.showDeleteConfirmation = false;
    this.eventService.emitRefreshData();
  }
}
