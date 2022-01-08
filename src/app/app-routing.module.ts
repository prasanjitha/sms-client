import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
const routes: Routes = [
  { path:'', redirectTo: 'about', pathMatch: 'full'},
  { path: 'details', component: StudentDetailsComponent },
  { path: 'register', component: StudentRegisterComponent },
  {path:'about',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
