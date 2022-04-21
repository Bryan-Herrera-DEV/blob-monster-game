import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PantallaComponent } from "./pantalla/pantalla.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "phoneError",
				component: PantallaComponent,
			},
			{
				path: "notFound",
				component: NotFoundComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MidleRoutingModule {}
