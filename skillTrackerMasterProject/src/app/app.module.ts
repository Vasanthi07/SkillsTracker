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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component'; 
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { ImageComponent } from './components/image/image.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    AppComponent,
    AddAssociateComponent,
    SearchAssociateComponent,
    AddSkillComponent,
    UpdateAssociateComponent,
    UpdateAssociateDetailsComponent,
    BarGraphComponent,
    LoginPageComponent,
    SignUpComponent,
    ImageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
