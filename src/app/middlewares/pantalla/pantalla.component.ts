import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-pantalla",
	templateUrl: "./pantalla.component.html",
	styleUrls: ["./pantalla.component.scss"],
})
export class PantallaComponent implements OnInit {
	constructor(private route: Router) {}

	ngOnInit(): void {
		alert(
			"Lo siento, esta aplicacion aun no esta disponible en versiones mobiles"
		);
		this.route.navigate(["/"]);
	}
}
