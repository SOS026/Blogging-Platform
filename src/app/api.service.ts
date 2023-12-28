import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs";

@Injectable ({
    providedIn: "root"
})
export class ApiService {
    constructor(private http : HttpClient) {}

    postBlog (data: any){
        return this.http.post<any>("http://localhost:3000/blogs", data)
        .pipe(map((res:any)=>{
            return res;
        }))
    }
    getBlog() {
        return this.http.get<any>("http://localhost:3000/blogs")
        .pipe(map((res:any)=>{
            return res;
        })) 
    }
    updateBlog(data:any, id:number){
        return this.http.put<any>("http://localhost:3000/blogs/"+ id,data)
        .pipe(map((res:any)=>{
            return res;
        }))
    }
    deleteBlog(id:number){
        return this.http.delete<any>("http://localhost:3000/blogs/"+id)
        .pipe(map((res:any)=>{
            return res;
        }))
    }

}