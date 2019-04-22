import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../students/services/events/event.service';

/**
 * Header Component
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'so-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** Logged in user */
  user: string = '';

  /**
   * Creates an instance of HeaderComponent.
   * @memberof HeaderComponent
   */
  constructor(private eventService: EventService) { }

  /**
   * Lifecycle hook of angular after component
   * Intialization
   * @memberof HeaderComponent
   */
  ngOnInit() {
    this.eventService.getUserEmitter().subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

}
