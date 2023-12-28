import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogModel } from '../users.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css']
})
export class BlogDashboardComponent implements OnInit {

  formValue !: FormGroup;
  blogModelObj: BlogModel = new BlogModel();
  blogData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}
  

  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      title : [''],
      auther : [''],
      date : [''],
      content : ['']
    })
    this.getAllBlog();
  }

  clickAddBlog(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postBlogDetails(){


    this.blogModelObj.id = this.formValue.value.id;
    this.blogModelObj.title = this.formValue.value.title;
    this.blogModelObj.auther = this.formValue.value.auther;
    this.blogModelObj.date = this.formValue.value.date;
    this.blogModelObj.content = this.formValue.value.content;

    this.api.postBlog(this.blogModelObj)
    .subscribe(res=>{
      // console.log("Successfully added the customer details");
      console.log(res);
      alert("Blog added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllBlog();
    }
    ,
    err=>{
      alert("Something went wrong");
      console.error(err)
    }
    )
  }
  getAllBlog(){
    this.api.getBlog()
    .subscribe(res=>{
      this.blogData = res;
    })
  }
  deleteBlog(row: any){
    this.api.deleteBlog(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getAllBlog();
    })
  }
  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.blogModelObj.id = row.id;
    console.log(row.id)
    this.formValue.controls['title'].setValue(row.firstName);
    this.formValue.controls['auther'].setValue(row.lastName);
    this.formValue.controls['date'].setValue(row.email);
    this.formValue.controls['content'].setValue(row.mobile);
  }
  updateBlogDetails(){
    this.blogModelObj.title = this.formValue.value.title;
    this.blogModelObj.auther = this.formValue.value.auther;
    this.blogModelObj.date = this.formValue.value.date;
    this.blogModelObj.content = this.formValue.value.content;

    this.api.updateBlog(this.blogModelObj,this.blogModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllBlog();
    })
  }
  
}