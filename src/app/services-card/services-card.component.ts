import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent implements OnInit {
  rentalManagement = ["Photography", "Police verification", "Complete society formality", "Facilitate move-in/out"];
  endToEndCollection = ["Periodic visit to property.","Payment to statutory authorities.","Resolve dispute, if any."];
  propertyManagement = ["Monitoring plots / empty houses.","Rental management of residential properties.","Payment to statutory authorities.","Repair and Maintenance."];
  rentalAgreement = ["Truely online.","Online stamp paper.","Online drafting.","e-Signature."];
  constructor() { }

  ngOnInit(): void {
  }

}
