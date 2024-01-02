import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ApiService } from './api.service';
import { BlogService } from './blog.service';
import { HoverDirective } from './custom directive/hover.directive';
import { OhoverDirective } from './custom directive/ohover.directive';
import { BlogGuardService } from './blog-guard.service';
import { CustompipePipe } from './custompipe.pipe';
import { ErrorComponent } from './error/error.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    BlogDashboardComponent,
    BlogListComponent,
    HoverDirective,
    OhoverDirective,
    CustompipePipe,
    ErrorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, BlogService, BlogGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
