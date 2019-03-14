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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HeaderComponent } from './structures/header/header.component';
library.add(fas, far);

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        SignInComponent,
        HomeComponent,
        UsersIndexComponent,
        UserDetailsComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
        NgbModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
