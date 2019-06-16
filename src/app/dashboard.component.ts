import { Component, OnInit } from '@angular/core';

import { Stars } from './stars';
import { StarsService } from './stars.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stars: Stars[] = [];

  constructor(private starsService: StarsService) {
  }

  ngOnInit(): void {
    this.starsService.getStars()
      .then(stars => this.stars = stars.slice(1, 5));
  }
}
