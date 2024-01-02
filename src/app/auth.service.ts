import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthService{
    constructor (private http: HttpClient) { }

    loggedIn: boolean = false;

    login(){
        this.loggedIn = true;
        // console.log('log')
        // alert('You have logged in')
    }
    logout(){
        this.loggedIn = false;
        // console.log('logoo')
        alert('You have logged out')
    }
    IsAuthenticated(){
        return this.loggedIn;
    }
}