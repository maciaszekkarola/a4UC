import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {}

    // metoda ta zostala rozszerzona wiec w app module nie jest juz wywolana canactChild 
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuth()
        .then(
            (authentication: boolean) => {
                if (authentication) {
                    return true;  
                }else {
                    this.router.navigate(['/']);
                }
            }
        );       
    }

    canActivateChild(route: ActivatedRouteSnapshot, 
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }        
}
