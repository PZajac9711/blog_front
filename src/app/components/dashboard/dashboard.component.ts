import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title;
  url;
  body;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addPost() {
    this.data.addPost(this.url, this.title, this.body).subscribe((result) => {
      if (!result) {
        console.log('dodalem');
      } else {
        console.log('nie dodalem');
      }
    });
  }
}
