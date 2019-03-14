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
                    name: string, surname: string): Observable<UserContract> {

        const url = environment.apiBaseUrl + 'api/Users/Register';
        const body = {
            userName,
            password,
            confirmPassword,
            email,
            name,
            surname
        };
        return this.http.post<UserContract>(url, body);
    }

    public fetchAll(): Observable<UserContract[]> {
        const url = environment.apiBaseUrl + 'api/Users/FetchAll';
        return this.http.post<UserContract[]>(url, null);
    }

    public getUserByUsername(userName: string): Observable<UserContract> {
        const url = environment.apiBaseUrl + 'api/Users/GetUserByUserName';
        const body = {userName};
        return this.http.post<UserContract>(url, body);

    }

    public updateUser(userId: number, userName: string, name: string, surname: string,
                      email: string, address: string, civicNumber: string,
                      zipCode: number, city: string, isAdministrator: boolean): Observable<UserContract> {

        const url = environment.apiBaseUrl + 'api/Users/UpdateUser';

        const body = {
            userId,
            userName,
            name,
            surname,
            email,
            address,
            civicNumber,
            zipCode,
            city,
            isAdministrator
        };
        return this.http.post<UserContract>(url, body);
    }
}
