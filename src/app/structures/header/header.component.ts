import { Component, OnInit } from '@angular/core';
import { SessionHolderService } from 'src/app/services/session-holder.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public isExpanded: boolean = false;
    public isAuthenticated = false;
    public authenticatedUserName: string = null;


    constructor(
        private router: Router,
        public sessionHolder: SessionHolderService) {
    }

    ngOnInit() {

        // Se non sono autenticato, niente
        if (!this.sessionHolder.isAuthenticated) {
            return;
        }

        // TODO Agganciare l'EventEmitter per gestire il cambio di stato!

        // All'inizializzazione, inserisco i valori dell'utente
        this.isAuthenticated = this.sessionHolder.isAuthenticated;
        this.authenticatedUserName = this.sessionHolder.user.userName;
    }

    public signOut() {

        // Salvo lo username prima che venga pulito
        const oldUserName = this.sessionHolder.user.userName;

        // Pulizia della sessione utente
        this.sessionHolder.clearCredentials();

        // Ridirigo a sign-in
        this.router.navigate(['sign-in']);

        // Messaggio di conferma
        toastr.success('Arrivederci ' + oldUserName + '!');
    }

}
