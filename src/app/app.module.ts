import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './account/register/register.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { AppRoutingModule } from './app.routing-module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { UsersIndexComponent } from './users/users-index/users-index.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateComponent } from './users/create/create.component';
library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
    HomeComponent,
    UsersIndexComponent,
    UserDetailsComponent,
    DeleteUserComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
