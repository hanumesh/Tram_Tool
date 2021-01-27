import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isShowPostsContent: boolean = true;
  isShowTagsContent: boolean;
  isShowUsersContent: boolean;
  loggedOut: boolean;
  isTag: boolean;
  isUser: boolean;

  constructor() { }

  ngOnInit() {
  }

  searchPostsBtn(){
    // alert("Inside searchPostsBtn()...");
    this.isShowUsersContent = false;
    this.isShowTagsContent = false;
    this.isShowPostsContent = true;
    this.isTag = false;
    // this.loggedOut = false;
  }

  searchTagsBtn(){
    this.isTag = true;
    // alert("Inside searchTagsBtn()...");
    this.isShowPostsContent = false;
    this.isShowUsersContent = false;
    this.isShowTagsContent = true;
    this.loggedOut = false;
  }

  searchUsersBtn(){
    // alert("Inside searchUsersBtn()...");
    this.isTag = false;
    this.isUser = true;
    this.isShowTagsContent = false;
    this.isShowPostsContent = false;
    this.isShowUsersContent = true;
  }

}
