import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
// export class AuthGuard implements CanActivate {
  // constructor(private authService: AuthService, private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return this.authService.user$.pipe(map((user: any) => {
  //     if (user) return true;

  //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
  //     return false;
  //   }))
  // }

}
