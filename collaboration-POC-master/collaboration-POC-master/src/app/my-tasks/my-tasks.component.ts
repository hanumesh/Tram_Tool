
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent  implements OnInit {
  
  constructor(public sanitizer: DomSanitizer) { }
  
    ngOnInit() {
     // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  
  }
  