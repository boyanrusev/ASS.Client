import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from "./shared/login/login.component";
import { AuthGuard } from "./shared/core/guards/auth.guard";
import { Routes } from "@angular/router";
import { RegisterComponent } from "./shared/register/register.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' },
    { path: 'repairCards', loadChildren:'./modules/repairCardModule/repairCard.module#RepairCardModule'}
];