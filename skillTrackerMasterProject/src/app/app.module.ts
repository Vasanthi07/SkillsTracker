import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssociateComponent } from './components/add-associate/add-associate.component';
import { SearchAssociateComponent } from './components/search-associate/search-associate.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAssociateComponent } from './components/update-associate/update-associate.component';
import { UpdateAssociateDetailsComponent } from './components/update-associate-details/update-associate-details.component';
import { ChartsModule } from 'ng2-charts';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAssociateComponent,
    SearchAssociateComponent,
    AddSkillComponent,
    UpdateAssociateComponent,
    UpdateAssociateDetailsComponent,
    BarGraphComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
