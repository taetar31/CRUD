import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Stars } from './stars';

@Injectable()
export class StarsSearchService {

  constructor(private http: HttpClientModule) {
  }

  search(term: string): Observable<Stars[]> {
    return this.http
      .get(`api/stars/?name=${term}`)
      .map(response => response.json().data as Stars[]);
  }
}
