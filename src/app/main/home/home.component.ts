import { Component, OnInit } from '@angular/core';
import { SessionHolderService } from 'src/app/services/session-holder.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public authenticatedUser: string = null;

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


        this.authenticatedUser = this.sessionHolder.user.userName;
    }

}
