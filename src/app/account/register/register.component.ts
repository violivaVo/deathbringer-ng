import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component ({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    public name: string = this.name;
    public surname: string = this.surname;
    public username: string = this.username;
    public password: string = this.password;
    public confirmPassword: string = this.confirmPassword;
    public email: string = this.email;
    public feed: string = null;
    public error: string = null;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private user: UsersService) {
    }

    public register() {

        if (this.password !== this.confirmPassword) {
            this.error = 'password must be the same of confirm password';
        } else {

            this.user.register(this.name, this.surname, this.username,  this.password,
                this.confirmPassword, this.email).subscribe(

                // Successo
                (data: UserContract) => {

                // Navigazione alla sign-in
                this.router.navigate(['sign-in']);
                },

                // Fallito
                (responseError: any) => {
                    if (responseError.error.status === 400) {

                        responseError.Error = {
                            '': [
                                'Account exsiting: anotherone user is been registering with this credencial',
                            ]
                        };
                    } else if (responseError.error.status === 500) {

                        responseError.Error = {
                            '': [
                                'Account blocked: there are many problems with solution, review the code',
                            ]
                        };
                    }

                    this.feed = 'Invalids credential...';
                }
            );
        }
    }
}
