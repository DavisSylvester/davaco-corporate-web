import { Routes } from "@angular/router";
import { NotFound } from "../Components/index";




export const NavigationRoutes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },    
    { path: "401", component: NotFound }
   

];


