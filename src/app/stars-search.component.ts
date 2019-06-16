import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Stars } from './stars';
import { StarsSearchService } from './stars-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './stars-search.component.html',
  styleUrls: ['./stars-search.component.css'],
  providers: [StarsSearchService]
})
export class StarsSearchComponent implements OnInit {
  stars: Observable<Stars[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private starsSearchService: StarsSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.stars = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
            this.starsSearchService.search(term)
            : // or the observable of empty stars if no search term
            of<Stars[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Stars[]>([]);
      })
    );
  }

  gotoDetail(stars: Stars): void {
    const link = ['/detail', stars.id];
    this.router.navigate(link);
  }
}
