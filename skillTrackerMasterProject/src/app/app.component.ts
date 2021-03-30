import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'skillTrackerMasterProject';

  loginFlag : boolean =false;
  constructor(private router:Router){}
  ngOnInit(): void {
    
    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.loginFlag=true;
      console.log("hiii");
    }
  }


  addAssociate(){
    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/add-associate']);
    }
    else{
      localStorage.setItem('redirectURL','/add-associate');
      this.router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem("loginStatus");
    this.loginFlag=false;
    this.router.navigate(['/login']);
  }
  
  searchAssociate(){
    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/search-associate']);
    }
    else{
      localStorage.setItem('redirectURL','/search-associate');
      this.router.navigate(['/login']);
    }
  }

  addSkill(){

    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/add-skill']);
    }
    else{
      localStorage.setItem('redirectURL','/add-skill');
      this.router.navigate(['/login']);
    }
  }
}
