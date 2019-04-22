import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IStudent } from 'src/app/core/models/student';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  /** Refresh data emitter */
  refershDataEmitter: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);

  /** Edit student emitter */
  editStudentEmitter: BehaviorSubject<IStudent> = new BehaviorSubject<IStudent>(undefined);

  /** View student only emitter */
  viewStudentEmitter: BehaviorSubject<IStudent> = new BehaviorSubject<IStudent>(undefined);

  /** Filter category emitter */
  filterCategoryEmitter: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  /** Filter by search */
  filterSearchEmitter: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  /** Delete emitter */
  deleteEmitter: BehaviorSubject<number> = new BehaviorSubject<number>(undefined);

  /** Logged in user emitter */
  userEmitter: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  /**
   * Get refresh data emitter
   *
   * @returns {BehaviorSubject<void>}
   * @memberof EventService
   */
  getRefreshDataEmitter(): BehaviorSubject<void> {
    return this.refershDataEmitter;
  }

  /**
   * Get Edit student emitter
   *
   * @returns {BehaviorSubject<IStudent>}
   * @memberof EventService
   */
  getEditStudentEmitter(): BehaviorSubject<IStudent> {
    return this.editStudentEmitter;
  }
  
  /**
   * Get View student emitter
   *
   * @returns {BehaviorSubject<IStudent>}
   * @memberof EventService
   */
  getViewStudentEmitter(): BehaviorSubject<IStudent> {
    return this.viewStudentEmitter;
  }

  /**
   * Filter student by category
   *
   * @returns {BehaviorSubject<string>}
   * @memberof EventService
   */
  getFilterCategoryEmitter(): BehaviorSubject<string> {
    return this.filterCategoryEmitter;
  }

  /**
   * Filter student by category
   *
   * @returns {BehaviorSubject<string>}
   * @memberof EventService
   */
  getSearchFilterEmitter(): BehaviorSubject<string> {
    return this.filterSearchEmitter;
  }

  /**
   * Get logged in user emitter
   *
   * @returns {BehaviorSubject<string>}
   * @memberof EventService
   */
  getUserEmitter(): BehaviorSubject<string> {
    return this.userEmitter;
  }

  /**
   * Delete emitter 
   *
   * @returns {BehaviorSubject<number>}
   * @memberof EventService
   */
  getDeleteEmitter(): BehaviorSubject<number> {
    return this.deleteEmitter;
  }

  /**
   * Emit data to refresh list
   *
   * @memberof EventService
   */
  emitRefreshData(): void {
    this.refershDataEmitter.next(undefined);
  }

  /**
   * Edit student
   *
   * @param {IStudent} student
   * @memberof EventService
   */
  emitEditStudent(student: IStudent): void {
    this.editStudentEmitter.next(student);
  }

  /**
   * Edit student
   *
   * @param {IStudent} student
   * @memberof EventService
   */
  emitViewStudent(student: IStudent): void {
    this.viewStudentEmitter.next(student);
  }

  /**
   * FIlter student by category
   *
   * @param {string} category
   * @memberof EventService
   */
  emitFilterCategory(category: string): void {
    this.filterCategoryEmitter.next(category);
  }

  /**
   * Search student 
   *
   * @param {string} search
   * @memberof EventService
   */
  emitSearchFilter(search: string): void {
    this.filterSearchEmitter.next(search);
  }

  /**
   * Emit delete
   *
   * @param {number} id
   * @memberof EventService
   */
  emitDelete(id: number): void {
    this.deleteEmitter.next(id);
  }

  /**
   * Emit logged in user
   *
   * @param {string} name
   * @memberof EventService
   */
  emitUser(name: string): void {
    this.userEmitter.next(name);
  }

  constructor() { }
}
