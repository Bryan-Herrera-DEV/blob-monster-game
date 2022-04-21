import { Injectable } from "@angular/core";
import { monster } from "../interface/monster";
import { user } from "../interface/user";

@Injectable({
	providedIn: "root",
})
export class UserService {
	user: user = JSON.parse(localStorage.getItem("user")!);
	monster: monster = JSON.parse(localStorage.getItem("monster")!);
	constructor() {}

	add_coins(coins: number) {
		this.user.actual_coins += coins;
		localStorage.setItem("user", JSON.stringify(this.user));
	}
	remove_coins(coins: number) {
		this.user.actual_coins -= coins;
		localStorage.setItem("user", JSON.stringify(this.user));
	}
	up_level() {
		this.user.actualLevel++;
		localStorage.setItem("user", JSON.stringify(this.user));
	}
	up_reward() {
		this.user.reward++;
		localStorage.setItem("user", JSON.stringify(this.user));
	}
	get_all_attack() {
		let attack: number | any = 0;
		attack += this.user.attack["baseDamage"];
		return attack;
	}
}
