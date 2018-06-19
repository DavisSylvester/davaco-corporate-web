import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavigationRoutes } from "./NavigationRoutes";


const routes: any[] = [];

console.log(NavigationRoutes);



routes.push(...NavigationRoutes);

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
