import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserContract } from '../models/user-contract';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        private http: HttpClient) {
    }

    public register(userName: string, email: string,
                    password: string, confirmPassword: string,
                    nome: string, cognome: string): Observable<UserContract> {

        const url = environment.apiBaseUrl + 'api/Users/Register';
        const body = {
            userName,
            password,
            confirmPassword,
            email,
            nome,
            cognome
        };
        return this.http.post<UserContract>(url, body);
    }

    public fetchAll(): Observable<UserContract[]> {
        const url = environment.apiBaseUrl + 'api/Users/FetchAll';
        return this.http.post<UserContract[]>(url, null);
    }

    public showD(userName: string): Observable<UserContract> {
        const url = environment.apiBaseUrl + 'api/Users/GetUserByUserName';
        const body = {
            userName
        };
        return this.http.post<UserContract>(url, body);
    }
}
