import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleComponent} from './components/single/single.component';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AdminGuardGuard} from './serices/admin-guard.guard';
import {EditComponent} from './components/edit/edit.component';
import {RegisterComponent} from './components/register/register.component';
import {FindComponent} from './components/find/find.component';

const routes: Routes = [
    {
      path: '',
      component: MainComponent
    },
    {
      path: 'blog/:post',
      component: SingleComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
    ,
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AdminGuardGuard]
    },
    {
      path: 'page/:number',
      component: MainComponent
    },
    {
      path: 'edit/:title',
      component: EditComponent,
      canActivate: [AdminGuardGuard]
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'find/:word',
      component: FindComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
