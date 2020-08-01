import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  public posts$: any;
  constructor(private routes: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    let pattern;
    this.routes.paramMap.subscribe(params => {
      pattern = params.get('word');
    });
    this.data.findPosts(pattern).subscribe(response => {
      this.posts$ = response;
    });
  }

}
