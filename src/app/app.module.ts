import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {HttpClientModule} from '@angular/common/http';//importar cliente http de angular
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
