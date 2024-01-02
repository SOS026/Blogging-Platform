import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm : FormGroup; // this signupForm property will hold this signup form
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router){}  //injecting FormBuilder, HttpClient and Router inside constructor
  ngOnInit(): void{
    this.signupForm = this.formBuilder.group({           //initializing the form, formbuilder will group 
      fullname: ['', Validators.required],  // form controls
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/bloggers", this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Something went wrong")
    })
  }

}
