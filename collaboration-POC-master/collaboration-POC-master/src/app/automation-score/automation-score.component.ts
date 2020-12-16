import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-automation-score',
  templateUrl: './automation-score.component.html',
  styleUrls: ['./automation-score.component.css']
})

export class AutomationScoreComponent implements OnInit {

   score : boolean;
  constructor() { }

  ngOnInit() {
  
    this.score = true;
  }


}
