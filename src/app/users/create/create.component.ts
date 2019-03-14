import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserContract } from 'src/app/models/user-contract';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    public userName: string = null;
    public name: string = null;
    public surname: string = null;
    public email: string = null;
    public address: string = null;
    public civicNumber: string = null;
    public zipCode: number = null;
    public city: string = null;
    public isAdministrator: boolean = false;
    public password: string = null;

    constructor(activatedRoute: ActivatedRoute,
                private usersService: UsersService,
                private http: HttpClient) { }

    private user: UserContract;

    ngOnInit() {
    }

    public userCreate(
    ) {
            this.usersService.utenteCrea(this.userName, this.password,
                this.name, this.surname,
                this.email, this.address, this.civicNumber,
                this.zipCode, this.city, this.isAdministrator).subscribe(
                    (data: UserContract) => {
                        this.user = data;
                    },
                    (error: any) => {
                        console.log('Errore ' + error);
                    }
                )
        }
}
