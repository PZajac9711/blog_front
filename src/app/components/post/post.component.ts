import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts$: any;
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.getAll().subscribe(response => {
      this.posts$ = response;
    });
    console.log(this.posts$);
  }
}
