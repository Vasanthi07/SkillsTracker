import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociatesService } from 'src/app/services/associates.service';
import { SkillsEntry } from 'src/app/skillsentry';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  theSkillEntry : SkillsEntry = new SkillsEntry();
  constructor(private theService:AssociatesService,private router:Router) { }

  ngOnInit(): void {
  }


  //adds skills to the skills entry database
  addSkill(){
    let responseDataBack = this.theService.addSkillsInSkillsEntry(this.theSkillEntry);
    responseDataBack.subscribe((responseData)=>
    {
      alert(responseData.message);
      this.router.navigate(['/search-associate']);
    });
  }

}
