import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SideComponent } from './components/side/side.component';
import { FooterComponent } from './components/footer/footer.component';
import {DataService} from './serices/data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { SingleComponent } from './components/single/single.component';
import { MainComponent } from './components/main/main.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthInterceptor} from './serices/auth.interceptor';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { FindComponent } from './components/find/find.component';
import { ResetComponent } from './components/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    SearchComponent,
    CategoriesComponent,
    SideComponent,
    FooterComponent,
    ItemComponent,
    SingleComponent,
    MainComponent,
    SummaryPipe,
    LoginComponent,
    DashboardComponent,
    EditComponent,
    RegisterComponent,
    FindComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
