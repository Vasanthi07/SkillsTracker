import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Associates } from 'src/app/associates';
import { AssociatesService } from 'src/app/services/associates.service';
import { Skills } from 'src/app/skills';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})

export class AddAssociateComponent implements OnInit {

  selectedSkillName: string;
  butDisabled: boolean = false;
  divs: number[] = [];

  

  theAssociate: Associates = new Associates();
  skill: Skills= new Skills;
  theSkill=[];
  responseDetails: any;

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  constructor(private httpClient:HttpClient,private theService:AssociatesService,private router:Router,private toastr:ToastrService) {
    this.theSkill.push({skill: ""});
   }

  ngOnInit(): void {
    
    if(localStorage.getItem("loginStatus")=="logged in succesfully"){
      this.router.navigate(['/add-associate']);
    }
    else{
      localStorage.setItem('redirectURL','/add-associate');
      this.router.navigate(['/login']);
    }

    // localStorage.setItem("redirectURL","khgcidhug");

    // console.log(localStorage.getItem("redirectURL"));

    
    //for creating skills in combo box which is obtained from skills entry database
    let responseDataBack = this.httpClient.get("http://localhost:8065/api/associates/skillentry");
    responseDataBack.subscribe((responseData)=>
    {
      console.log(responseData);
      console.log(responseData[0]);
      this.responseDetails = responseData;
      console.log(this.responseDetails[0]);
      

    });

  }
  display(val: any) {
    console.log("Welcome " + val.toString());

  }
  removeValue(i){
    if(i!=0)
    {
    this.theSkill.splice(i,1);
    }
  }

  addvalue(){
    this.theSkill.push({skill: ""});
  }

  createDiv(): void {
    console.log("hjkkk");
    
    this.divs.push(this.divs.length);
  }

  removeDiv():void {
    this.divs.pop();
  }

  test()
  {
    console.log(this.theSkill.push(this.skill));
  }

  duplicateSkills :string[]=[];
  addNewAssociate() {
    console.log(this.theSkill);
    this.duplicateSkills= this.checkDuplicateSkills(this.theSkill);

    console.log(this.duplicateSkills + "welcome");
    if(this.duplicateSkills.length>0){
      alert("duplicate skills");
    }
    else{
      this.theAssociate.skills=this.theSkill;
      console.log(this.theAssociate);
  
      let proceed = confirm("do you want to contiue?");
       if(proceed){
      let responseDataBack = this.theService.addNewAssociate(this.theAssociate);
      responseDataBack.subscribe((responseData) => {

        console.log(responseData.message);
        if(responseData.message = "New skill added successfully"){
          // alert(responseData.message);
          this.toastr.success(responseData.message, "Success");
        }
        // this.toastr.success(responseData.message,"success");
        // alert(responseData.message);

        this.router.navigate(['/search-associate'])
      
      });
    }
    }
    
  }
  iter :number =0;
  results:string[];
  checkDuplicateSkills(skill) : string [] {
    console.log(skill.length)
    console.log(skill[0].skillName);
    this.results=[];
    // this.sorted_arr = skill.skillName.sort();
    // console.log(this.sorted_arr);
    for(this.iter = 0; this.iter<skill.length-1;this.iter++){
      if(skill[this.iter+1].skillName==skill[this.iter].skillName){
        console.log(skill[this.iter].skillName);
        this.results.push(skill[this.iter].skillName);
      }
    }
    console.log(this.results);
    return this.results;
  }

   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8065/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8065/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }



}
