import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Stars } from './stars';
import { StarsService } from './stars.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  stars: Stars[];
  selectedStars: Stars;

  constructor(private starsService: StarsService,
              private router: Router) {
  }

  getStars(): void {
    this.starsService
      .getStars()
      .then(stars => this.stars = stars);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.starsService.create(name)
      .then(stars => {
        this.stars.push(stars);
        this.selectedStars = null;
      });
  }

  delete(stars: Stars): void {
    this.starsService
      .delete(stars.id)
      .then(() => {
        this.stars = this.stars.filter(s => s !== stars);
        if (this.selectedStars === stars) {
          this.selectedStars = null;
        }
      });
  }

  ngOnInit(): void {
    this.getStars();
  }

  onSelect(stars: Stars): void {
    this.selectedStars = stars;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStars.id]);
  }
}
