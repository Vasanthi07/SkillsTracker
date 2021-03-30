import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/logindetails';
import { AssociatesService } from 'src/app/services/associates.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  login : LoginDetails = new LoginDetails();
  constructor(private httpClient:HttpClient,private theService:AssociatesService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/sign-up']);
      
    }
    else{
      localStorage.setItem('redirectURL','/sign-up');
      this.router.navigate(['/login']);
    }

  }

  responseData : any;
  newUser(){
    
    let responseDataBack = this.theService.addNewUser(this.login);
      responseDataBack.subscribe((responseData)=>{
        this.responseData= responseData;
        console.log(responseData);
        alert(this.responseData.message);
        this.router.navigate(['/search-associate']);
      },
      
     (error)=>{
      console.log(error);
      alert(error);
      
      });
      

    
  }

}
