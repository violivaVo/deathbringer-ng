import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInResult } from '../models/sign-in-result';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient: HttpClient) { }

    public signIn(userName: string, password: string): Observable<SignInResult> {

        // Composizione url globale
        const url = environment.apiBaseUrl + 'api/Authentication/SignIn';

        // Composizione body
        const body = {
            userName,
            password
        };

        // Avvio chiamata HTTP
        return this.httpClient.post<SignInResult>(url, body);
    }
}
