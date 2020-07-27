import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public post$: any;
  titleNew;
  bodyNew;
  urlNew;

  constructor(private data: DataService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      const title = params.get('title');
      this.data.getSpecific(title).subscribe(response => {
        this.post$ = response;
        this.titleNew = this.post$.title;
        this.bodyNew = this.post$.body;
        this.urlNew = this.post$.imageUrl;
      });
    });
  }

  // tslint:disable-next-line:typedef
  editPost() {
    this.data.updatePost(this.titleNew, this.urlNew, this.bodyNew, this.post$.id).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
