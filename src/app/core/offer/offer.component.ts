import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/_models/offer.model';
import { OfferService } from 'src/app/_services/offer/offer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  list: IOffer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.list = [
      { id: 1, name: '10% OFF burger', description: '10% OFF burger' },
      { id: 2, name: '20% OFF pizza', description: '20% OFF pizza' },
      { id: 3, name: '50% OFF pasta', description: '50% OFF pasta' },
      { id: 4, name: '35% OFF salad', description: '35% OFF salad' },
      { id: 5, name: '5% OFF drinks', description: '5% OFF drinks' },
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
