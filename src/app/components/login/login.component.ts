import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static isLogged = false;
  static canLogOut = false;
  login: string;
  password: string;
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  authenticateFront() {
    this.data.authenticate(this.login, this.password).subscribe((result) => {
      if (!result) {
        LoginComponent.isLogged = false;
        LoginComponent.canLogOut = false;
      } else {
        console.log('asd');
        LoginComponent.isLogged = true;
        LoginComponent.canLogOut = true;
      }
    });
  }
}
