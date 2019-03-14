import { Component, OnInit } from '@angular/core';
import { SessionHolderService } from 'src/app/services/session-holder.service';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public authenticatedUser: string = null;
    public authenticatedUserLastAccessDate : string = null;
    public formattedLastAccessDate : string = null;
    public currentDate : string = null;

    constructor(
        private router: Router,
        private sessionHolder: SessionHolderService) {
    }

    ngOnInit() {

        // Se non sono autenticato, ridirigi a sign-in
        if (!this.sessionHolder.isAuthenticated) {
            this.router.navigate(['sign-in']);
            return;
        }

        // Recupero le informazioni utente per binding
        this.authenticatedUser = this.sessionHolder.user.userName;
        this.authenticatedUserLastAccessDate = this.sessionHolder.user.lastAccessDate;

        const momentDate = moment(this.authenticatedUserLastAccessDate);
        const deMomentDate = momentDate.lang("ko");
        this.formattedLastAccessDate = deMomentDate.format('LLLL');

        setInterval(
            () => this.currentDate = moment().toISOString(),
        2000);
    }

}
