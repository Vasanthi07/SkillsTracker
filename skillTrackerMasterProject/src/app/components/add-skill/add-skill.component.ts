import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AssociatesService } from 'src/app/services/associates.service';
import { SkillsEntry } from 'src/app/skillsentry';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  theSkillEntry : SkillsEntry = new SkillsEntry();
  responseDetails: any;
  constructor(private theService:AssociatesService,private router:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {

    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/skillentry");
    responseDataBack.subscribe((responseData)=>
    {
      console.log(responseData);
      console.log(responseData[0]);
      this.responseDetails = responseData;
      console.log(this.responseDetails[0]);
      
    });

  }


  //adds skills to the skills entry database
  addSkill(){
    if(this.theSkillEntry.skill == null){
      alert("please enter any skill..");
    }
    else{
      let responseDataBack = this.theService.addSkillsInSkillsEntry(this.theSkillEntry);
      responseDataBack.subscribe((responseData)=>
      {
        alert(responseData.message);
        // this.router.navigate(['/search-associate']);
      });
    }
    }
    

}
