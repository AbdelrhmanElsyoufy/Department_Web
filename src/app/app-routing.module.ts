import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { PropertyDetailComponent } from './components/property/property-detail/property-detail.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {path:'' , component:PropertyListComponent,pathMatch:"full"},
  {path:'add-property' , component:AddPropertyComponent},
  {path:'rent-property' , component:PropertyListComponent},
  {path:'proprty-detail/:id' , component:PropertyDetailComponent},
  {path:'user/register' , component:RegisterComponent},
  {path:'user/login' , component:LoginComponent},
  {path:'**' , component:PropertyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
