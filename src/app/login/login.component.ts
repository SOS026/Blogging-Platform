import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {}
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({    //initializing the form, formbuilder will group
        email:['', Validators.required],   // form controls
        password:['', Validators.required]
      })
  }

  login(){
    this.http.get<any>("http://localhost:3000/bloggers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Login Success");
        this.authService.login();
        this.loginForm.reset();
        this.router.navigate(['blog-dashboard'])
      } else{
        alert('Please check your Email or Password');
      }
    }, err=>{
      alert("Something went wrong!!")
    })
  }

}
