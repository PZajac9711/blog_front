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
  public allPosts$: any;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  // tslint:disable-next-line:typedef
  addPost() {
    this.data.addPost(this.url, this.title, this.body).subscribe((result) => {
      if (!result) {
        console.log('dodalem');
        window.location.reload();
      } else {
        console.log('nie dodalem');
      }
    });
  }

  // tslint:disable-next-line:typedef
  getAllPosts() {
    this.data.getAllPost().subscribe(response => {
      this.allPosts$ = response;
    });
  }

  // tslint:disable-next-line:typedef
  changeStatus(id) {
    this.data.changePostStatus(id).subscribe(response => {
      if (!response) {
        window.location.reload();
      } else {
        console.log('error');
      }
    });
  }
}
