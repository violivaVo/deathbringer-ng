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
    public email: string = null;
    public name: string = null;
    public surname: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;

    constructor(
        private UsersService: UsersService,
        activatedRoute: ActivatedRoute) {
        activatedRoute.params
            .forEach(p => this.userName = p.id);
    }

    ngOnInit() {
        this.getUser();
    }

    public getUser() {
        this.UsersService.getUserByUsername(this.userName).subscribe(
            (data: UserContract) => {
                this.name = data.name,
                this.surname = data.surname,
                this.address = data.address,
                this.civicNumber = data.civicNumber,
                this.zipCode = data.zipCode,
                this.city = data.city,
                this.userName = data.userName,
                this.email = data.email;
            }
        );
    }
}
