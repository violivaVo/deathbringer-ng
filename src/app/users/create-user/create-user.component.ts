import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    public userName: string = null;
    public password: string = null;
    public email: string = null;
    public name: string = null;
    public surname: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;
    public isAdministrator: boolean = true;

    // public feedback: string = null;
    // public errorText: string = null;

    constructor(private httpClient: HttpClient,
        private router: Router,
        private creation: UsersService) { }

    ngOnInit() {
        this.create();
    }

    public create() {

        this.creation.createUser(this.userName, this.password, this.email, this.name, this.surname,  this.address,
            this.civicNumber, this.zipCode, this.city, this.isAdministrator).subscribe(

                //successo
                (data: UserContract) => {
                    // any INDICA CHE E' UN PEZZO CHE TYPESCRIPT NON CONTROLLA (IN PARTICOLARE SE LA VEDE JAVASCRIPT, SUL BROWSER)

                    data.userName = this.userName;
                    data.password = this.password;
                    data.email = this.email;
                    data.name = this.name;
                    data.surname = this.surname;
                    data.address = this.address;
                    data.civicNumber = this.civicNumber;
                    data.zipCode = this.zipCode;
                    data.city = this.city;
                    data.isAdministrator = this.isAdministrator;
                },

                //fallito
                (error: HttpErrorResponse) => {

                    // this.errorText = null;


                    // for (let propertyName in error.error) {
                    //     let propertyValue = error.error[propertyName];
                    //     this.errorText = this.errorText + propertyValue;
                    // }
                    // this.errorText = error.body[''][0];

                },
            );
    }

}
