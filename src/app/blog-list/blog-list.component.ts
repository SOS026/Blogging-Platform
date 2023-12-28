// src/app/blog-list/blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogs();
  }

  private loadBlogs() {
    this.blogService.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
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
