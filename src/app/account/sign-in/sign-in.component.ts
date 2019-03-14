import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInResult } from 'src/app/models/sign-in-result';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

import * as toastr from 'toastr';
import { SessionHolderService } from 'src/app/services/session-holder.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    public title = 'deathbringer-css';
    public userName = 'mario.rossi';
    public password = 'paperino';
    public isBusy = false;

    constructor(
        private router: Router,
        private authentication: AuthenticationService,
        private sessionHolder: SessionHolderService) {
    }

    public ngOnInit() {

        // Se SONO autenticato, ridirigi a home
        if (this.sessionHolder.isAuthenticated) {
            this.router.navigate(['']);
            return;
        }
    }

    public signIn() {

        this.isBusy = true;
        this.authentication.signIn(this.userName, this.password).subscribe(

            // Successo
            (data: SignInResult) => {

                // Disattivo il busy indicator
                this.isBusy = false;

                this.sessionHolder.saveCredentials(data, this.password);

                // Messaggio di conferma
                toastr.success('Benvenuto ' + data.userName);

                // Navigazione alla home page
                this.router.navigate(['']);
            },

            // Fallito
            (responseError: any) => {

                // Disattivo il busy indicator
                this.isBusy = false;

                // responseError.error[""][0]
                // responseError.status = 400;
                // responseError.error = {
                //     "ConfirmPassword":[
                //         "The field is required"
                //     ],
                //     "":[
                //         "Another...."
                //     ]
                // }
                toastr.warning('Credenziali invalide...');
            }
        );
    }
}
