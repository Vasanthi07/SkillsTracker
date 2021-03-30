import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginDetails } from 'src/app/logindetails';
import { AssociatesService } from 'src/app/services/associates.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login : LoginDetails = new LoginDetails();
  constructor(private theService:AssociatesService,private httpClient:HttpClient,private router:Router,private header:AppComponent) {

   }

  ngOnInit(): void {
  }
  responseData:any;
  logIn(){

    let resposeDataBack = this.theService.logIn(this.login.managerEmail,this.login);
    resposeDataBack.subscribe((responseData)=>{

      this.responseData = responseData;
      console.log(this.responseData);
      localStorage.setItem('loginStatus',this.responseData.message);
      alert(this.responseData.message);
      
      if(localStorage.getItem('redirectURL')!= null){
        this.router.navigate([localStorage.getItem('redirectURL')]);
      }
      else{
        this.router.navigate(['/search-associate']);
      }

      console.log("hello");
      this.header.ngOnInit();

    });

  }

}
