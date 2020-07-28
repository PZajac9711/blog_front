import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login;
  password;
  rePassword;
  email;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    if (this.password === this.rePassword) {
      this.data.register(this.login, this.password, this.email).subscribe(response => {
        console.log(response);
      });
    }
  }
}
