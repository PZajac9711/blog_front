import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';
import {Router} from '@angular/router';

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

  constructor(private data: DataService, private router: Router) {
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
        this.router.navigate(['/']);
        LoginComponent.isLogged = true;
        LoginComponent.canLogOut = true;
      }
    });
  }
}
