import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    public userName: string = null;

    constructor(
        activatedRoute: ActivatedRoute) {

        // Recupero il valore del parametro "id"
        activatedRoute.params
            .forEach(p => this.userName = p.id);
    }

    ngOnInit() {
    }

}
