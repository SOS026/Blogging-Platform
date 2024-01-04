import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';
import { SearchComponent } from '../search/search.component';
// import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  // searchTerm: string = '';  //new change
  // public searchTerm !: any;    //The ! indicates that the variable will be initialized later.

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogs();
  }

  private loadBlogs() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  searchText: string ='';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  
}



















// import { Component, OnInit } from '@angular/core';
// import { BlogModel } from '../users.model';
// import { BlogService } from '../blog.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//  selector: 'app-blog-list',
//  templateUrl: './blog-list.component.html',
//  styleUrls: ['./blog-list.component.css']
// })
// export class BlogListComponent implements OnInit {

//  vlogs: BlogModel[] = [];
//  vlogModelObj: BlogModel = new BlogModel();
//  vlogData: any;

//  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {}

//  ngOnInit(): void {
//     this.getVlogs();
//  }

//  private getVlogs(): void {
//     this.blogService.getVlogs().subscribe(
//       (vlog) => {
//         this.vlogs = vlog;
//       }
//     );
//  }
// }















// import { Component } from '@angular/core';
// import { BlogModel } from '../users.model';
// import { BlogService } from '../blog.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-blog-list',
//   templateUrl: './blog-list.component.html',
//   styleUrls: ['./blog-list.component.css']
// })
// export class BlogListComponent {

//   vlogs: BlogModel[] = [];
//   vlogModelObj: BlogModel = new BlogModel();
//   vlogData !: any;


//   constructor(private blogService: BlogService,private ActivatedRoute: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.blogService.getVlogs().subscribe(
//       (vlog) => {
//         this.vlogs = vlog;
//       }
//     );
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../blog.service';
// import { Blog } from '../blog.model';
// // import { SearchPipe } from '../search.pipe';

// @Component({
//   selector: 'app-blog-list',
//   templateUrl: './blog-list.component.html',
//   styleUrls: ['./blog-list.component.css'],
// })
// export class BlogListComponent implements OnInit {
//   blogs: Blog[] = [];
//   // public searchTerm !: any;    //The ! indicates that the variable will be initialized later.
//   constructor(private blogService: BlogService) {}

//   ngOnInit() {
//     this.loadBlogs();
//   }

//   private loadBlogs() {
//     this.blogService.getBlogs().subscribe((data) => {
//       this.blogs = data;
//     });
//   }
// }



















// // import { Component, OnInit } from '@angular/core';
// // import { BlogModel } from '../users.model';
// // import { BlogService } from '../blog.service';
// // import { ActivatedRoute } from '@angular/router';

// // @Component({
// //  selector: 'app-blog-list',
// //  templateUrl: './blog-list.component.html',
// //  styleUrls: ['./blog-list.component.css']
// // })
// // export class BlogListComponent implements OnInit {

// //  vlogs: BlogModel[] = [];
// //  vlogModelObj: BlogModel = new BlogModel();
// //  vlogData: any;

// //  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {}

// //  ngOnInit(): void {
// //     this.getVlogs();
// //  }

// //  private getVlogs(): void {
// //     this.blogService.getVlogs().subscribe(
// //       (vlog) => {
// //         this.vlogs = vlog;
// //       }
// //     );
// //  }
// // }















// // import { Component } from '@angular/core';
// // import { BlogModel } from '../users.model';
// // import { BlogService } from '../blog.service';
// // import { ActivatedRoute } from '@angular/router';

// // @Component({
// //   selector: 'app-blog-list',
// //   templateUrl: './blog-list.component.html',
// //   styleUrls: ['./blog-list.component.css']
// // })
// // export class BlogListComponent {

// //   vlogs: BlogModel[] = [];
// //   vlogModelObj: BlogModel = new BlogModel();
// //   vlogData !: any;


// //   constructor(private blogService: BlogService,private ActivatedRoute: ActivatedRoute) {}

// //   ngOnInit(): void {
// //     this.blogService.getVlogs().subscribe(
// //       (vlog) => {
// //         this.vlogs = vlog;
// //       }
// //     );
// //   }
// // }
