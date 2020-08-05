import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../serices/data.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  tokenIsSet = false;
  token;
  information;
  email;
  send = false;
  password;
  repassword;
  isReset = false;
  constructor(private routes: ActivatedRoute, private data: DataService) {
  }

  ngOnInit(): void {
    this.information = '';
    this.routes.paramMap.subscribe(params => {
      if (params.get('token') !== null) {
        this.token = params.get('token');
        this.tokenIsSet = true;
      }
    });
  }

  // tslint:disable-next-line:typedef
  sendEmail() {
    this.data.sendResetPasswordEmail(this.email).subscribe(response => {
      this.send = true;
      this.information = 'If email exist in our portal you will get email with link for reset password';
    });
  }

  // tslint:disable-next-line:typedef
  resetPassword() {
    if (this.password === this.repassword) {
      this.data.resetPassword(this.token, this.password).subscribe(response => {
        if (response.status === 200) {
          this.isReset = true;
          this.information = 'Your password have been change, now you can use new password';
        }
      }, err => {
        this.information = err;
      });
    } else {
      this.information = 'passwords are not the same';
    }
  }
}
