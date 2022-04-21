import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class PantallaGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean | any {
		if (screen.width > 1020) {
			return true;
		}
		this.router.navigate(["/error/phoneError"]);
	}
}
