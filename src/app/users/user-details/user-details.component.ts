import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    public userName: string = null;
    public name: string = null;
    public surname: string = null;
    public email: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;
    public isAdministrator: boolean = null;
    public userId: number = null;
    public user: UserContract = null;

    constructor(
        activatedRoute: ActivatedRoute,
        private usersService: UsersService

        ) {

        // Recupero il valore del parametro "id"
        activatedRoute.params
            .forEach(p => this.userName = p.id);
    }

    public ngOnInit() {
        this.showDetails();
    }

    public showDetails() {
        this.usersService.showD(this.userName).subscribe(
            (data: UserContract) => {
                // this.user = data;
                this.name = data.name;
                this.surname = data.surname;
                this.email = data.email;
                this.address = data.address;
                this.civicNumber = data.civicNumber;
                this.zipCode = data.zipCode;
                this.city = data.city;
                this.isAdministrator = data.isAdministrator;
                this.userId = data.userId;
            },
            (error: any) => {
                console.log('Errore ' + error);
            }
        );
    }

}
