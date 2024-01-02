import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogGuardService } from './blog-guard.service';
import { AuthService } from './auth.service';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: BlogDashboardComponent, canActivate:[BlogGuardService] },
  { path: 'about', component: AboutComponent },
  // { path: 'home/:id', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog-dashboard', component: BlogDashboardComponent, canActivate:[BlogGuardService]},
  { path: 'blog-list', component: BlogListComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
