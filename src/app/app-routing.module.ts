import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { IsLoginGuard } from "./guards/is-login.guard";
import { LoginGuardGuard } from "./guards/login-guard.guard";
import { PantallaGuard } from "./guards/pantalla.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent,
		canActivate: [PantallaGuard, IsLoginGuard],
	},
	{
		path: "error",
		loadChildren: () =>
			import("./middlewares/midle.module").then((m) => m.MidleModule),
	},
	{
		path: "game",
		component: GameComponent,
		canActivate: [PantallaGuard, LoginGuardGuard],
	},
	{ path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
