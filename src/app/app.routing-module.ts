import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './main/home/home.component';
import { UsersIndexComponent } from './users/users-index/users-index.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UpdateComponent } from './users/update/update.component';
import { HeaderComponent } from './structure/header/header.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersIndexComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/:id/update', component: UpdateComponent},
    { path: 'header', component: HeaderComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {
}
