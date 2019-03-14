import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';
import { SessionHolderService } from 'src/app/services/session-holder.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-index',
    templateUrl: './users-index.component.html',
    styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

    public isBusy = false;
    public users: UserContract[] = [];

    constructor(
        private usersService: UsersService,
        private router: Router,
        private sessionHolder: SessionHolderService) {
    }

    public ngOnInit() {

        // Se non sono autenticato, ridirigi a sign-in
        if (!this.sessionHolder.isAuthenticated) {
            this.router.navigate(['sign-in']);
            return;
        }

        this.fetch();
    }

    public fetch() {
        this.isBusy = true;
        this.usersService.fetchAll().subscribe(
            (data: UserContract[]) => {
                this.isBusy = false;
                this.users = data;
            },
            (error: any) => {
                this.isBusy = false;
                console.log('Errore ' + error);
            }
        );
    }
}
