import { coerceStringArray } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-associate',
  templateUrl: './search-associate.component.html',
  styleUrls: ['./search-associate.component.css']
})
export class SearchAssociateComponent implements OnInit {

  @Input ('searchValue') searchValue : string = "";
  responseDataById :  any;
  responseData :  any;
  searchOption:string;
  // router: any;


  constructor(private httpClient:HttpClient,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {

    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/search-associate']);
    }
    else{
      localStorage.setItem('redirectURL','/search-associate');
      this.router.navigate(['/login']);
    }

    let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/all");
    responseUrl.subscribe((responseData) => {
    this.responseData = responseData;
    console.log(responseData);  
    });
    
  }

  searchForAll(){
    let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/all");
    responseUrl.subscribe((responseData) => {
    this.responseData = responseData;
    console.log(responseData);  
    });
  }
  
  displaySearchOption(searchOption : any){
    this.searchOption = searchOption.value;
  }
  
  // searchForUser(){
  //   if(this.searchOption == "associateId"){
  //     let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/associateId/" + this.searchValue);
  //     responseUrl.subscribe((responseDataById) => {
  //     this.responseDataById = responseDataById;
  //     if(responseDataById == null){
  //       alert("please enter existing id");
  //     }
  //     this.responseData=null;
  //     console.log(responseDataById); },
  //     (error)=>{
  //       console.log(error);
  //       // alert("Not Found");
  //       this.toastr.error("Not Found","error");

  //     }
      
  //     );
  //   }
  //   else if(this.searchOption == null){
  //     alert("please select any option");
  //   }
  //   else if(this.searchOption=="associateName"){
  //     let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/names/start/" + this.searchValue);
  //     responseUrl.subscribe((responseData)=>{
  //       this.responseData = responseData;
  //       if(responseData=""){
  //         alert("please enter correct details");
  //       }
  //       console.log(responseData);
  //     }
  //     ,
  //     (error)=>{
  //       console.log(error);
  //       // alert("Not Found");
  //       this.toastr.error("Not Found","error");
  //     });
  //   }
  //   else{
  //     let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/"+
  //     this.searchOption + "/" + this.searchValue);
  //     responseUrl.subscribe((responseData) => {
  //     this.responseData = responseData;
  //     if(responseData==""){
  //       alert("please enter correct details");
  //     }
  //     console.log(responseData); }
  //     ,
  //     (error)=>{
  //       console.log(error);
  //       // alert("Not Found");
  //       this.toastr.error("Not Found","error");
  //     });
  //     }
  // }

  displayCard(evt: MouseEvent){
    console.log(evt);
    this.router.navigate(["/add-skill"]);
  }

}
