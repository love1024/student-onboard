import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student/student.service';
import { IStudent } from '../../core/models/student';
import { EventService } from '../services/events/event.service';
import { CATERGORY } from '../../app.constants';

@Component({
  selector: 'so-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  /** List of students */
  studentList: IStudent[] = [];

  listToShow: IStudent[] = [];

  /**
   * Creates an instance of StudentListComponent.
   * @param {StudentService} studentService
   * @memberof StudentListComponent
   */
  constructor(private studentService: StudentService, private eventService: EventService) { }

  /**
   * Angular lifecycle hook
   *
   * @memberof StudentListComponent
   */
  ngOnInit() {
    this.studentService.getAllStudentList().subscribe((students) => {
      this.studentList = this.listToShow = students;
    });
    this.eventService.getFilterCategoryEmitter().subscribe((category) => {
      if (category) {
        this.filterByCategory(category);
      }
    });
    this.eventService.getSearchFilterEmitter().subscribe((search) => {
      if (search != undefined) {
        this.filterBySearch(search);
      }
    });
  }

  /**
   * FIlter student by category
   *
   * @param {string} category
   * @memberof StudentListComponent
   */
  filterByCategory(category: string): void {
    if (category === CATERGORY.ALL) {
      this.listToShow = this.studentList;
      return;
    }
    this.listToShow = this.studentList.filter((student) => student.category === category);
  }

  /**
   * Filter Students by search
   *
   * @param {string} search
   * @memberof StudentListComponent
   */
  filterBySearch(search: string): void {
    console.log(search);
    this.listToShow = this.studentList.filter((student) => {
      return student.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
