import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id;
  @Input() url;
  @Input() title;
  @Input() postBody;
  @Input() date;
  @Input() author;
  constructor() { }

  ngOnInit(): void {
  }

}
