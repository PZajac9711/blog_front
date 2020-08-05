import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  word;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  go() {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.word !== '') {
      this.router.navigate(['/find', this.word]);
    }
  }
}
