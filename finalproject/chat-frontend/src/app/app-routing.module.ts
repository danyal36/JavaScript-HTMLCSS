import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChatInboxComponent } from './components/chat-inbox/chat-inbox.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';

const routes: Routes = [
  {path: "" , component: UserLoginComponent},
  {path: "login" , component: UserLoginComponent},
  {path: "chat" , component: ChatInboxComponent , canActivate:[AuthGuard]},
  {path: "chat1" , component: ChatSidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
