import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { GameComponent } from "./game/game.component";
import { UpgradeDamageMenuComponent } from "./game/upgrade-damage-menu/upgrade-damage-menu.component";
import { EnemieComponent } from "./game/enemie/enemie.component";
import { NotFoundComponent } from "./middlewares/not-found/not-found.component";
import { PantallaComponent } from "./middlewares/pantalla/pantalla.component";
import { MidleModule } from "./middlewares/midle.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { InfoMenuComponent } from './game/info-menu/info-menu.component';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		GameComponent,
		UpgradeDamageMenuComponent,
		EnemieComponent,
  InfoMenuComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		MidleModule,
		VgCoreModule,
	],
	providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
