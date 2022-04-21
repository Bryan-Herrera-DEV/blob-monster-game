import {
	AfterContentInit,
	AfterViewChecked,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { user, attack } from "../interface/user";
import { monster } from "../interface/monster";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	@ViewChild("video", { static: true, read: ElementRef })
	video!: ElementRef;

	registerForm: FormGroup | any;
	submitted: boolean = false;

	constructor(private formBuilder: FormBuilder, private router: Router) {}

	get form() {
		return this.registerForm.controls;
	}
	base_att: attack = {
		baseDamage: 1,
	};
	userNew: user = {
		name: "",
		actualLevel: 1,
		attack: this.base_att,
		reward: 1,
		actual_coins: 1,
	};
	monster: monster = {
		level_monster: 1,
		hp_monster_total: 100,
		hp_monster_actual: 100,
		defense_monster: 1,
	};
	onSubmit() {
		this.submitted = true;
		if (this.registerForm.invalid) {
			return;
		}

		// console.log(this.registerForm.value);
		this.userNew.name = this.registerForm.value.username;

		localStorage.setItem("user", JSON.stringify(this.userNew));
		localStorage.setItem("monster", JSON.stringify(this.monster));

		this.router.navigate(["/game"]);
	}

	encodeID(s: string): string {
		if (s === "") return "_";
		return s.replace(/[^a-zA-Z0-9.-]/g, function (match) {
			return match[0].charCodeAt(0).toString(16);
		});
	}
	unamePattern = "^[a-zA-Z0-9_-]{3,15}$";
	ngOnInit(): void {
		// Formulario
		console.log(this.encodeID("asdas''")),
			(this.registerForm = this.formBuilder.group({
				username: ["", [Validators.required]],
			}));

		//autoplay video
		this.video.nativeElement.muted = "muted";
		this.video.nativeElement.play();
	}
}
