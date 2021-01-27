import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.createPostForm.controls; }

  oncreatePostSubmit() {
    alert("Inside submit function")
    this.submitted = true;    

    // stop here if form is invalid
    if (this.createPostForm.invalid) {
      return;
    }
    this.loading = true;

  }

}
