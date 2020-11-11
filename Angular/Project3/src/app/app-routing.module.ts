import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "home" , component: HomeComponent},
  {path: "service" , component: ServiceComponent},
  {path: "about" , component: AboutComponent},
  {path: "user" , component: UserComponent},
  {path: "forms" , component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
