import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private data: DataService) {
  }
  public posts$: any;
  @Input() pageNumber;

  ngOnInit(): void {
    this.data.getAll(this.pageNumber).subscribe(response => {
      console.log(response);
      this.posts$ = response;
    });
  }
}
