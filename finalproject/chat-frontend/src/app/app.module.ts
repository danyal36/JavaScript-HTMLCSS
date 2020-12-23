import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatInboxComponent } from './components/chat-inbox/chat-inbox.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    ChatInboxComponent,
    ChatSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
