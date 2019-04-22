import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudent } from 'src/app/core/models/student';
import { IDocumentList, IDocument } from '../../../core/models/document';

const documentList: IDocumentList = {
  international: [
    {
      name: 'Domicile',
      key: 'domicile',
      required: true
    },
    {
      name: 'Birth certificate',
      key: 'birthCertificate',
      required: true
    },
    {
      name: 'Marksheets',
      key: 'marksheets',
      required: true
    },
    {
      name: 'Police clearence',
      key: 'police',
      required: true
    },
    {
      name: 'Passport',
      key: 'passport',
      required: true
    },
    {
      name: 'Declaration',
      key: 'declaration',
      required: true
    }
  ],
  domestic: [
    {
      name: 'Domicile',
      key: 'domicile',
      required: true
    },
    {
      name: 'Birth certificate',
      key: 'birthCertificate',
      required: true
    },
    {
      name: 'Marksheets',
      key: 'marksheets',
      required: true
    },
    {
      name: 'Police clearence',
      key: 'police',
      required: false
    },
    {
      name: 'Passport',
      key: 'passport',
      required: false
    },
    {
      name: 'Declaration',
      key: 'declaration',
      required: true
    }
  ]
}

const data: IStudent[] = [
  {
    id: 1,
    name: 'Lovepreet',
    category: 'international',
    domicile: true,
    birthCertificate: false,
    marksheets: true,
    police: false,
    passport: false,
    declaration: true,
    dob: new Date(),
    fatherName: 'Father',
    motherName: 'Mother',
    lastClassScore: 90
  },
  {
    id: 2,
    name: 'Lovepreet',
    category: 'domestic',
    domicile: true,
    birthCertificate: false,
    marksheets: true,
    police: false,
    passport: false,
    declaration: true,
    dob: new Date(),
    fatherName: 'Father',
    motherName: 'Mother',
    lastClassScore: 90
  },
  {
    id: 3,
    name: 'Lovepreet',
    category: 'international',
    domicile: true,
    birthCertificate: false,
    marksheets: true,
    police: false,
    passport: false,
    declaration: true,
    dob: new Date(),
    fatherName: 'Father',
    motherName: 'Mother',
    lastClassScore: 90
  },
]

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  /**
   * Get List of all students
   *
   * @returns {Observable<IStudent[]>}
   * @memberof StudentService
   */
  getAllStudentList(): Observable<IStudent[]> {
    return of(data);
  }

  /**
   * Get list of documents for given category
   *
   * @param {string} category
   * @returns {string[]}
   * @memberof StudentService
   */
  getDocumentList(category: string): IDocument[] {
    return documentList[category];
  }

  /**
   * Save a new student
   *
   * @param {IStudent} student
   * @returns {Observable<void>}
   * @memberof StudentService
   */
  saveNewStudent(student: IStudent): Observable<void> {
    let maxId = -1;
    data.forEach((d) => maxId = Math.max(maxId, d.id));
    student.id = maxId + 1;
    data.push(student);
    return of();
  }

  /**
   * Update student
   *
   * @param {IStudent} student
   * @returns {Observable<void>}
   * @memberof StudentService
   */
  updateStudent(student: IStudent): Observable<void> {
    const existingStudent = data.filter((d) => d.id === student.id);
    const index = data.indexOf(existingStudent[0]);
    data[index] = student;
    return of();
  }

  /**
   * Delete student by id
   *
   * @param {number} id
   * @returns {Observable<void>}
   * @memberof StudentService
   */
  deleteStudent(id: number): Observable<void> {
    const student = data.filter((d) => d.id === id);
    const index = data.indexOf(student[0]);
    data.splice(index, 1);
    return of();
  }
}
