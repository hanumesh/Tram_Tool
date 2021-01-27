import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  LoggedInUserEmail : string;
  token: string;  
  fullname: string;

  constructor(private accountService: AccountService,
    private router: Router
  ) {

  }

  ngOnInit() {    
    this.LoggedInUserEmail =  localStorage.getItem('LoggedInUserEmail');
   }

   searchBtn(){
    //  alert("Inside searchBtn()");
     this.router.navigateByUrl('/search');
   }

  onLogout() {
    alert("Inside onLogout() ");
    this.accountService.logout(this.token).subscribe(LogoutSuccess => {
      console.log('LogoutSuccess', LogoutSuccess)
      alert("Inside success response "+LogoutSuccess);
      this.router.navigateByUrl('/login');
    });
    this.router.navigateByUrl('/login');
  }
  myProfileRedirectFunc(){
    
    this.router.navigateByUrl('/profile');
  }
}
