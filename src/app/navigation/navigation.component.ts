import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // public searchTerm : string;

  constructor() {}
  ngOnInit(): void {}

  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;      //Retrieves the value entered in the search input field.
  //   console.log(this.searchTerm);
  //   // this.search.next(this.searchTerm);
  // }

}
