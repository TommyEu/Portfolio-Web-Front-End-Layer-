import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { EditaboutmeComponent } from './componentes/aboutme/editaboutme/editaboutme.component';
import { HomeComponent } from './componentes/home/home.component';
import { NeweducationComponent } from './componentes/education/neweducation/neweducation.component';
import { EditeducationComponent } from './componentes/education/editeducation/editeducation.component';
import { EducationComponent } from './componentes/education/education.component';
import { NewexpComponent } from './componentes/experience/newexp/newexp.component';
import { EditexpComponent } from './componentes/experience/editexp/editexp.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'edit-profile', component:EditaboutmeComponent},
  {path: 'new-education', component:NeweducationComponent},
  {path: 'edit-education/:idEducation', component:EditeducationComponent},
  {path: 'new-exp', component:NewexpComponent},
  {path: 'edit-exp/:id', component:EditexpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
