import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotifierService } from '../services/notifier.service';

@Injectable()
export class GuardIsLoggedUser implements CanActivate {
    private _authService: AuthService;
    private _notifier: NotifierService;

    constructor(authService: AuthService, notifier: NotifierService) {
        this._authService = authService;
        this._notifier = notifier;
    }

    public canActivate() {
        if (!this._authService.isLogged()) {
            this._notifier.pleaseSignIn();
        }

        return this._authService.isLogged();
    }
}
