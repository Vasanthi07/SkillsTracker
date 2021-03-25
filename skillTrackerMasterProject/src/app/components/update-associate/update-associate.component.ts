import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Associates } from 'src/app/associates';

@Component({
  selector: 'app-update-associate',
  templateUrl: './update-associate.component.html',
  styleUrls: ['./update-associate.component.css']
})
export class UpdateAssociateComponent implements OnInit {

  theAssociate : Associates = new Associates(); 
  associateId : any;
  responseData : any;
  constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.associateId = params.get('id');
      console.log(this.associateId);
    });
    this.associateFormStaticContent();

    
  }

  associateFormStaticContent(){

    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/associateId/"+this.associateId);
    responseDataBack.subscribe((responseData)=>
    {
      this.responseData = responseData;
      console.log(responseData);
      // console.log(responseData.skills.length);
    });
  }

  graphFlag : boolean =false;
  displayGraph(){
    this.graphFlag = true;
    // this.router.navigate(['/bar-graph',this.associateId]);
  }

  // numberSequence(n:number) Array<number
}
