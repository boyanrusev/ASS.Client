import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    private loggedIn = false;
    authNavStatus$ = this._authNavStatusSource.asObservable();

    constructor(private http: HttpClient) {
        this.loggedIn = !!localStorage.getItem('currentUser');
        this._authNavStatusSource.next(this.loggedIn);
    }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:59122/api/authentication/login', { username, password })
            .pipe(map((res: any) => {
                if (res && res.auth_token && res.expires_in) {
                    localStorage.setItem('currentUser', JSON.stringify({ username, token: res.auth_token, expires_at: res.expires_in }));
                    this.loggedIn = true;
                    this._authNavStatusSource.next(true);
                }
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    }

    register(username: string, password: string, firstName: string, lastName: string, email: string) {
        return this.http.post<any>('http://localhost:59122/api/accounts/register', { username, password, firstName, lastName, email });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    // TODO: Add expires to the headers and etc
    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return expiresAt;
    }
}