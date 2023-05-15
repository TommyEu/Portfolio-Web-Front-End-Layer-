import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { EditaboutmeComponent } from './componentes/aboutme/editaboutme/editaboutme.component';
import { HomeComponent } from './componentes/home/home.component';
import { NeweducationComponent } from './componentes/education/neweducation/neweducation.component';
import { EditeducationComponent } from './componentes/education/editeducation/editeducation.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'edit-profile', component:EditaboutmeComponent},
  {path: 'new-education', component:NeweducationComponent},
  {path: 'edit-education/:id', component:EditeducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
