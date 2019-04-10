import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminService } from './sevices/admin.service';

const routes: Routes = [
    { path:  '', component: HomeComponent},
    { path:  'home', component: HomeComponent},
    { path:  'about', component: AboutComponent},
    { path:  'news', component: NewsComponent},
    { path:  'admin', component: AdminComponent, canActivate:[AdminService]},
    { path:  'login', component: LoginComponent},
]

export const routing = RouterModule.forRoot(routes)