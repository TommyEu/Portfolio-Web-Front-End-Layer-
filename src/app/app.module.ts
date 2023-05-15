import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { EditaboutmeComponent } from './componentes/aboutme/editaboutme/editaboutme.component';
import { HomeComponent } from './componentes/home/home.component';
import { NeweducationComponent } from './componentes/education/neweducation/neweducation.component';
import { EditeducationComponent } from './componentes/education/editeducation/editeducation.component';//importar cliente http de angular
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent,
    LoginComponent,
    EditaboutmeComponent,
    HomeComponent,
    NeweducationComponent,
    EditeducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
