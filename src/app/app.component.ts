import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInResult } from './models/sign-in-result';
import { SessionHolderService } from './services/session-holder.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private sessionHolder: SessionHolderService) {
    }

    public ngOnInit() {

        // Tento di ripristinare i dati dei sessione
        this.sessionHolder.tryToRestoreSession();
    }
}
