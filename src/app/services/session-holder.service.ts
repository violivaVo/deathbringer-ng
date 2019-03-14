import { Injectable } from '@angular/core';
import { SignInResult } from '../models/sign-in-result';
import { from } from 'rxjs';

const LocalStorageAuthKey = 'AUTH';

@Injectable({
  providedIn: 'root'
})
export class SessionHolderService {

    public isAuthenticated = false;
    public password: string = null;
    public user: SignInResult = null;

    public saveCredentials(data: SignInResult, password: string) {

        // Salvo le info dell'utente
        this.user = data;
        this.isAuthenticated = true;
        this.password = password;

        // Struttura per local storage
        const forLocalStorage = {
            user: data,
            password
        };

        // Serializzazione in JSON
        const json: string = JSON.stringify(forLocalStorage);

        // Salvataggio su local storage
        localStorage.setItem(LocalStorageAuthKey, json);
    }

    public clearCredentials() {

        // Pulisce il local storage
        localStorage.removeItem(LocalStorageAuthKey);

        // Pulisco la sessione corrente
        this.user = null;
        this.password = null;
        this.isAuthenticated = false;
    }

    public tryToRestoreSession() {

        // Tentiamo di recuperare i dati per il session holder
        const json = localStorage.getItem(LocalStorageAuthKey);

        // Se non ho niente, esco
        if (!json) {
            return;
        }

        // Riconversione in oggetto
        const fromStorage = JSON.parse(json);

        // Se non ci riesco, esco
        if (!fromStorage) {
            return;
        }

        // Se non ho le proprietà, esco
        if (!fromStorage.user || !fromStorage.password) {
            return;
        }

        // Ripristino tutto
        this.isAuthenticated = true;
        this.user = fromStorage.user;
        this.password = fromStorage.password;
    }
}
