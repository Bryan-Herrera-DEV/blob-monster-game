import { Component, OnInit } from "@angular/core";
import { user } from "../../interface/user";
import { monster } from "../../interface/monster";

import { UserService } from "../../service/user.service";

@Component({
	selector: "app-upgrade-damage-menu",
	templateUrl: "./upgrade-damage-menu.component.html",
	styleUrls: ["./upgrade-damage-menu.component.scss"],
})
export class UpgradeDamageMenuComponent implements OnInit {
	user: user = {} as user;
	monster: monster = {} as monster;
	attack = 0;
	constructor(private userService: UserService) {}

	upgrade_damage(cost: number): void {
		if (this.user.actual_coins >= cost) {
			this.user.actual_coins -= cost;
			this.user.attack["baseDamage"] += 1;
			localStorage.setItem("user", JSON.stringify(this.user));
			window.location.reload();
		} else {
			alert("Lo siento, consigue mas monedas");
		}
	}

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem("user")!);
		this.monster = JSON.parse(localStorage.getItem("monster")!);

		this.attack = this.user.attack["baseDamage"];
	}
}
