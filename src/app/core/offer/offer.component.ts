import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/_models/offer.model';
import { OfferService } from 'src/app/_services/offer/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  list: IOffer[] = [];

  constructor(private offerService: OfferService,
  ) { }

  ngOnInit(): void {
  }

}
