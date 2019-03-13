import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component({
    selector: 'app-users-index',
    templateUrl: './users-index.component.html',
    styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

    public isBusy = false;
    public users: UserContract[] = [];

    constructor(
        private usersService: UsersService) {
    }

    public ngOnInit() {
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
