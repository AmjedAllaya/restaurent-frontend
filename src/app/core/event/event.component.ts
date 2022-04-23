import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/_models/event.model';
import { EventService } from 'src/app/_services/event/event.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  list: IEvent[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.list = [
      { id: 1, name: 'Ramadan event', description: 'A big ramadan event', beginDate: '28/11/2022', endDate: '30/07/2023' },
      { id: 1, name: 'August event', description: 'A big august event', beginDate: '28/11/2022', endDate: '04/12/2023' },
      { id: 1, name: 'Summer event', description: 'A big summer event', beginDate: '28/11/2022', endDate: '10/11/2023' },
      { id: 1, name: 'New year event', description: 'A big new year event', beginDate: '28/11/2022', endDate: '26/03/2023' },
      { id: 1, name: 'Easter eggs event', description: 'A big easter event', beginDate: '28/11/2022', endDate: '11/05/2023' },
    ];
  }

    deleteItem(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  }
  editItem(id: number) {}
}
