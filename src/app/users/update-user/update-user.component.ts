import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

    public userId: number = null;
    public userName: string = null;
    public email: string = null;
    public name: string = null;
    public surname: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;
    public isAdministrator: boolean = true;

    constructor(private httpClient: HttpClient,
        private router: Router,
        private usersService: UsersService,
        private modification: UsersService, private activatedRoute: ActivatedRoute) {

        activatedRoute.params
            .forEach(p => this.userName = p.id);
        activatedRoute.params
            .forEach(p => this.userId = p.userId);
    }

    ngOnInit() {
        this.getUser();
        this.update();
    }

    public getUser() {
        this.usersService.getUserByUsername(this.userName).subscribe(

            (data: UserContract) => {
                this.email = data.email;
                this.name = data.name;
                this.surname = data.surname;
                this.userId = data.userId;
                this.userName = data.userName;
                this.address = data.address;
                this.civicNumber = data.civicNumber;
                this.city = data.city;
                this.zipCode = data.zipCode;
            },

            (error: any) => {

            }
        )
    }

    public update() {
        this.modification.updateUser(this.userId, this.userName, this.email,
            this.name, this.surname, this.address,
            this.civicNumber, this.zipCode,
            this.city, this.isAdministrator).subscribe(

                // Successo
                (data: UserContract) => {

                    data.userName = this.userName;
                    data.email = this.email;
                    data.name = this.name;
                    data.surname = this.surname;
                    data.address = this.address;
                    data.civicNumber = this.civicNumber;
                    data.zipCode = this.zipCode;
                    data.city = this.city;
                    data.isAdministrator = true;

                    // Navigazione alla home page
                    // this.router.navigate(['']);
                },

                // Fallito
                (responseError: any) => {

                }
            );
    }

}
