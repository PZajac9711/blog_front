import {Component, OnInit} from '@angular/core';
import {AdminGuardGuard} from '../../serices/admin-guard.guard';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public adminGuard: AdminGuardGuard) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteToken(){
    localStorage.clear();
  }
}
