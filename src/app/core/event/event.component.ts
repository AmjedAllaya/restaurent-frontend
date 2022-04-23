import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/_models/event.model';
import { EventService } from 'src/app/_services/event/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  list: IEvent[] = [];

  constructor(private eventService: EventService,
  ) { }

  ngOnInit(): void {
  }

}
