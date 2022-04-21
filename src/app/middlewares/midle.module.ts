import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MidleRoutingModule } from "./midle-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PantallaComponent } from "./pantalla/pantalla.component";

@NgModule({
	declarations: [NotFoundComponent, PantallaComponent],
	imports: [CommonModule, MidleRoutingModule],
})
export class MidleModule {}
