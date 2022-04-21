import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { monster } from "../interface/monster";
import { user } from "../interface/user";
import { UserService } from "../service/user.service";

@Component({
	selector: "app-game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
	@ViewChild("video", { static: true, read: ElementRef })
	video!: ElementRef;

	@ViewChild("progress", { static: true }) progress!: ElementRef;
	style = "transform: scale(1);";
	user: user = {} as user;
	monster: monster = {} as monster;
	porcentaje_vida: any = 100;
	porcentaje_vida_c = `${this.porcentaje_vida}%`;
	attack = 0;

	num_rand: number = 0;

	color_pairs = [
		["01E4FC", "8B15F2"],
		["F40076", "DF98FA"],
		["9055FF", "13E2DA"],
		["402565", "30BE96"],
		["FBC390", "D279EE"],
		["F9D9F4", "F9D9F4"],
		["0d324d", "7f5a83"],
		["009ffd", "2a2a72"],
		["037ade", "03e5b7"],
		["009fc2", "0d0a0b"],
	];

	constructor(private userService: UserService) {}

	// passLevel all
	pass_level_class = "disabled";
	open_pass_level(): void {
		this.pass_level_class = "scale-in-ver-bottom";
	}
	// pass level all

	// shopMenu all
	shop_menu_class = "disabled";
	open_shop(): void {
		if (this.shop_menu_class === "scale-in-br") {
			this.shop_menu_class = "disabled";
		} else {
			this.shop_menu_class = "scale-in-br";
		}
	}
	// shopMenu all

	// infoMenu all
	info_menu_class = "disabled";
	open_info(): void {
		if (this.info_menu_class === "scale-in-bl") {
			this.info_menu_class = "disabled";
		} else {
			this.info_menu_class = "scale-in-bl";
		}
	}

	resetpage() {
		window.location.reload();
	}
	check_level(vd: number): void {
		if (vd === 0) {
			this.open_pass_level();
			this.user.actualLevel++;

			this.userService.up_level();
			this.userService.up_reward();
			this.user.actual_coins += this.user.reward;
			this.monster.hp_monster_total += 100;
			this.monster.hp_monster_actual += this.monster.hp_monster_total;
			localStorage.setItem("user", JSON.stringify(this.user));
			localStorage.setItem("monster", JSON.stringify(this.monster));
		}
	}
	click(): void {
		this.style = "transform: scale(0.9);";
		setTimeout(() => {
			this.style = "transform: scale(1);";
		}, 100);
		let solU =
			this.monster.hp_monster_total /
			(this.monster.hp_monster_actual - this.attack);
		let solM = 100 / solU;
		this.porcentaje_vida = solM.toFixed(1);
		this.monster.hp_monster_actual -= this.attack;

		this.porcentaje_vida_c = `${this.porcentaje_vida}%`;
		this.check_level(this.monster.hp_monster_actual);
		localStorage.setItem("monster", JSON.stringify(this.monster));
	}

	ngOnInit(): void {
		//autoplay video
		this.video.nativeElement.muted = "muted";
		this.video.nativeElement.play();
		// get data usuario y monster
		this.user = JSON.parse(localStorage.getItem("user")!);
		this.monster = JSON.parse(localStorage.getItem("monster")!);

		this.attack = this.userService.get_all_attack();

		// calculando el porcentaje de vida del monstruo
		let solU = this.monster.hp_monster_total / this.monster.hp_monster_actual;
		let solM = 100 / solU;
		this.porcentaje_vida = solM.toFixed(1);
		this.porcentaje_vida_c = `${this.porcentaje_vida}%`;

		// random color
		var num =
			Math.floor(Math.random() * (0 - this.color_pairs.length)) +
			this.color_pairs.length;
		this.num_rand = num + 0;
		this.progress.nativeElement.style = `background: radial-gradient(circle at top, #${
			this.color_pairs[this.num_rand][0]
		}, #${this.color_pairs[this.num_rand][1]});`;
	}
}
