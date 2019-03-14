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
        private UsersService: UsersService,
        private router: Router,
        activatedRoute: ActivatedRoute) {
        activatedRoute.params
        .forEach(p => this.userName = p.id); }

    ngOnInit() {
        this.updateUser();
    }

    public updateUser() {
        this.UsersService.updateUser( this.userId, this.name, this.surname,
                                     this.email, this.address, this.civicNumber,
                                     this.zipCode, this.city, this.isAdministrator).subscribe(
            (data: UserContract) => {
                this.userId = data.userId,
                this.name = data.name,
                this.surname = data.surname,
                this.address = data.address,
                this.civicNumber = data.civicNumber,
                this.zipCode = data.zipCode,
                this.city = data.city,
                this.userName = data.userName,
                this.email = data.email,
                this.isAdministrator = data.isAdministrator;

                this.router.navigate(['/users']);
            }
        );
    }
}
