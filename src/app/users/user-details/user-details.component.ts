import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';
import * as toastr from 'toastr';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    public userName: string = null;
    public user: UserContract;

    constructor(
        activatedRoute: ActivatedRoute,
        private usersService: UsersService,
        private router: Router) {



        // Recupero il valore del parametro "id"
        activatedRoute.params
            .forEach(p => this.userName = p.id);
    }

    ngOnInit() {
        this.usersService.getUserByUserName(this.userName).subscribe(
            (data: UserContract) => {
            this.user = data;
                // Messaggio di conferma
            toastr.success('User ' + data.userName + ' Details');

                // Navigazione alla home page
            },
            (responseError: any) => {

                //responseError.error[""][0]
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

