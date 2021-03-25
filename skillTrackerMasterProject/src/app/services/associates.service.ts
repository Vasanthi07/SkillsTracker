import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../associates';
import { SkillsEntry } from '../skillsentry';

@Injectable({
  providedIn: 'root'
})
export class AssociatesService {
  

  constructor(private httpClient:HttpClient) { }


  //adds skills in skill entry database by manager
  addSkillsInSkillsEntry(theSkillEntry: SkillsEntry) {
    return this.httpClient.post<SkillsEntry>("http://localhost:8065/api/associates/skill",theSkillEntry);
  }


  //creates new associates and adds to the database
  addNewAssociate(theAssociate: Associates) {
    return this.httpClient.post<Associates>("http://localhost:8065/api/associates/",theAssociate);
  }

  //updates existing associates in the database
  updateAssociate(associateId:any, theAssociate: any) {
    return this.httpClient.put<Associates>("http://localhost:8065/api/associates/update/"+associateId,theAssociate);
  }
  
}
