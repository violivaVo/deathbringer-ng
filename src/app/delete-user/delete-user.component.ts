import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserContract } from '../models/user-contract';

@Component({
    selector: 'app-delete-user',
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

    public userName: string = null;

    constructor(activatedRoute: ActivatedRoute,
                private user: UserContract,
                private usersService: UsersService,
                private http: HttpClient) {

        activatedRoute.params
            .forEach(p => this.userName = p.id);
    }

    ngOnInit() {
        this.deleteUser(this.userName);
    }

    deleteUser(userName: string) {
        this.usersService.userDel(this.userName).subscribe(
            (data: UserContract) => {
                this.user = data;
            },
            (error: any) => {
                console.log('Errore ' + error);
            }
        );
    }
}
