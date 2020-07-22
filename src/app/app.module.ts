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
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { SingleComponent } from './components/single/single.component';
import { MainComponent } from './components/main/main.component';
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
