import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  displaySearchOption(searchOption : any){
    this.searchOption = searchOption.value;
  }
  
  searchForUser(){
    if(this.searchOption == "associateId"){
      let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/associateId/" + this.searchValue);
      responseUrl.subscribe((responseDataById) => {
      this.responseDataById = responseDataById;
      this.responseData=null;
      console.log(responseDataById); });
    }else{
      let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/"+
      this.searchOption + "/" + this.searchValue);
      responseUrl.subscribe((responseData) => {
      this.responseData = responseData;
      console.log(responseData); });
      }
  }
  searchForAll(){
    let responseUrl = this.httpClient.get("http://localhost:8065/api/associates/all");
    responseUrl.subscribe((responseData) => {
    this.responseData = responseData;
    console.log(responseData);  
    });
  }
  displayCard(evt: MouseEvent){
    console.log(evt);
    this.router.navigate(["/add-skill"]);
  }

}
