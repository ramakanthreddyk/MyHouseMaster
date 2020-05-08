import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  ids: Array<String> = ['Home', 'Services', 'Team', 'Contact Us']
  constructor() { }

  ngOnInit(): void {
  }

}
