import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Demo2Component } from './demo2.component';
import { Demo3Component } from './demo3.component';
import { Demo4Component } from './demo4.conponent';
import { Demo5Component } from './demo5.component';
import { Service1 } from './sevices/service1.service';
import { Demo6Component } from './demo6.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { routing } from './app.routing';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminService } from './sevices/admin.service';
import { ProductService } from './sevices/product.service';
import { Demo7Component } from './demo7.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    AdminComponent,
    LoginComponent,
    Demo7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    Service1,
    AdminService,
    ProductService
  ],
  bootstrap: [Demo2Component]
})
export class AppModule { }
