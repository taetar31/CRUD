import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Stars } from './stars';
import { StarsService } from './stars.service';

@Component({
  selector: 'app-detail',
  templateUrl: './stars-detail.component.html',
  styleUrls: [ './stars-detail.component.css' ]
})
export class StarsDetailComponent implements OnInit {
  stars: Stars;

  constructor(
    private starsService: StarsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.starsService.getStars(+params.get('id')))
      .subscribe(stars => this.stars = stars);
  }

  save(): void {
    this.starsService.update(this.stars)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
