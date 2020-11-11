import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'app', component: Child2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
