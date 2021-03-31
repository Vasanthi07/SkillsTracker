import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssociateComponent } from './components/add-associate/add-associate.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ImageComponent } from './components/image/image.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SearchAssociateComponent } from './components/search-associate/search-associate.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateAssociateDetailsComponent } from './components/update-associate-details/update-associate-details.component';
import { UpdateAssociateComponent } from './components/update-associate/update-associate.component';


const routes: Routes = [
  {
    path:'add-associate',component:AddAssociateComponent
  },
  {
    path:'search-associate',component:SearchAssociateComponent
  },{
    path:'add-skill',component:AddSkillComponent
  },
  {
    path:'update-associate/:id',component:UpdateAssociateComponent,
    // children:[{
    //   path:'bar-graph/:id',component:BarGraphComponent
    // },{
    //   path:'bar-graph',component:BarGraphComponent
    // }],
  },
  {
    path:'update-details/:id',component:UpdateAssociateDetailsComponent
  },
  {
    path:'bar-graph/:id',component:BarGraphComponent
  },{
    path:'login',component:LoginPageComponent
  }
  // ,{
  //   path:'',redirectTo:'/search-associate',pathMatch:'full'
  // }
  ,{
    path:'sign-up',component:SignUpComponent
  },{
    path:'image',component:ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
