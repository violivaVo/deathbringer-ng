import { Injectable } from '@angular/core';
import { UserContract } from '../models/user-contract';

@Injectable({
  providedIn: 'root'
})
export class SessionHolderService {

    public isAuthenticated: boolean = false;
    public user: UserContract = null;
}
