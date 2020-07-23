import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleComponent} from './components/single/single.component';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';

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
