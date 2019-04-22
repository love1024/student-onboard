import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/app/core/models/student';
import { EventService } from '../services/events/event.service';

@Component({
  selector: 'so-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  @Input()
  student: IStudent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  /**
   * View Student
   *
   * @memberof StudentCardComponent
   */
  view(): void {
    this.eventService.emitViewStudent(this.student);
    this.eventService.emitEditStudent(null);
  }

  /**
   * Edit Student
   *
   * @memberof StudentCardComponent
   */
  edit(): void {
    this.eventService.emitEditStudent(this.student);
    this.eventService.emitViewStudent(null);
  }

  /**
   * Delete event
   *
   * @memberof StudentCardComponent
   */
  delete(): void {
    this.eventService.emitDelete(this.student.id)
  }

}
