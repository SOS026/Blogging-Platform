import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }
}
















// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { BlogModel } from './users.model';

// @Injectable()
// export class BlogService {
//  private apiUrl = 'http://localhost:3000/blogs';

//  constructor(private http: HttpClient) {}

//  getVlogs(): Observable<BlogModel[]> {
//     return this.http.get<BlogModel[]>(this.apiUrl)
//       .pipe(catchError(this.handleError));
//  }

//  getVlogById(id: number): Observable<BlogModel> {
//     const vlogUrl = `${this.apiUrl}/${id}`;
//     return this.http.get<BlogModel>(vlogUrl)
//       .pipe(catchError(this.handleError));
//  }

//  private handleError(error: any): Observable<never> {
//     console.error('Error:', error);
//     return error('Error fetching data');
//  }
// }
















// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { BlogModel } from './users.model';

// @Injectable()
// export class BlogService {
//   private apiUrl = 'http://localhost:3000/blogs';

//   constructor(private http: HttpClient) {}

//   getVlogs(): Observable<BlogModel[]> {
//     return this.http.get<BlogModel[]>(this.apiUrl)
      
//   }

//   getVlogById(id: number): Observable<BlogModel> {
//     const vlogUrl = `${this.apiUrl}/${id}`;
//     return this.http.get<BlogModel>(vlogUrl); // .pipe(
//     //   catchError((error: any) => {
//     //     console.error(`Error fetching product with id ${id}:`, error);
//     //     throw error;
//     //   })
//     // );
//   }
// }
