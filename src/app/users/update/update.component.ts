import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component ({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

    public userId: number = null;
    public userName: string = null;
    public email: string = null;
    public name: string = null;
    public surname: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;
    public isAdministrator: boolean = null;

    constructor(
        private users: UsersService,
        private Users: UsersService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
            activatedRoute.params
            .forEach(p => this.userName = p.id),
            activatedRoute.params
            .forEach(p => this.userId = p.userId);
            }

    ngOnInit() {
        this.getUser();
        // Se lo metti all'inizio ti manda un messagio di errore 400 perchè legge i campi vuoti
        // this.updateUser();
    }

    public getUser() {
        this.Users.getUserByUsername(this.userName).subscribe(
            (data: UserContract) => {
                this.userId = data.userId,
                this.name = data.name,
                this.surname = data.surname,
                this.address = data.address,
                this.civicNumber = data.civicNumber,
                this.zipCode = data.zipCode,
                this.city = data.city,
                this.userName = data.userName,
                this.email = data.email;

            },

            (error: any) => {
            }
        );
    }

    public updateUser() {
        this.users.updateUser( this.userId, this.userName, this.name, this.surname,
                                     this.email, this.address, this.civicNumber,
                                     this.zipCode, this.city, this.isAdministrator).subscribe(
            // Successo
            (data: UserContract) => {
                data.userId = this.userId,
                data.name = this.name,
                data.surname = this.surname,
                data.address = this.address,
                data.civicNumber = this.civicNumber,
                data.zipCode = this.zipCode,
                data.city = this.city,
                data.userName = this.userName,
                data.email = this.email,
                data.isAdministrator = true;

                // Navigazione all users page
                this.router.navigate(['/users']);
            },

            // Fallito
            (responseError: any) => {
            }
        );
    }
}
