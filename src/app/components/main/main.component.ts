import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pageN = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.pageN = parseInt(params.get('number'));
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (params.get('number') === null || params.get('number') == 0) {
        this.pageN = 0;
      }
    });
  }

  // tslint:disable-next-line:typedef
  nextPage() {
    // tslint:disable-next-line:only-arrow-functions typedef
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.pageN += 1;
    this.router.navigate(['/page', this.pageN]);
  }
  // tslint:disable-next-line:typedef
  previousPage(){
    // tslint:disable-next-line:only-arrow-functions typedef
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.pageN -= 1;
    this.router.navigate(['/page', this.pageN]);
  }
}
