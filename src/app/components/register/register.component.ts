import {Component, OnInit} from '@angular/core';
import {DataService} from '../../serices/data.service';
import {Router} from '@angular/router';

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

  errorMessage;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.errorMessage = '';
  }

  // tslint:disable-next-line:typedef
  register() {
    if (this.password === this.rePassword) {
      this.data.register(this.login, this.password, this.email).subscribe(response => {
        this.router.navigate(['/login']);
      }, err => {
        this.errorMessage = err.error.debugMessage;
      });
    }
    else{
      this.errorMessage = 'passwords are not the same';
    }
  }
}
