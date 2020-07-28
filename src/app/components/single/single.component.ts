import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {DataService} from '../../serices/data.service';
import {AdminGuardGuard} from '../../serices/admin-guard.guard';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  public post$: any;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService, public adminGuard: AdminGuardGuard) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    let title: string;
    this.route.paramMap.subscribe(params => {
      title = params.get('post');
    });
    this.data.getSpecific(title).subscribe(params => {
      this.post$ = params;
    });
  }

}
