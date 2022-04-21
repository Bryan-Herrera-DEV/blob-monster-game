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
export class IsLoginGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean | any {
		if (!localStorage.getItem("user")) {
			return true;
		}
		alert("Ya estas logueado");
		this.router.navigate(["/game"]);
	}
}
