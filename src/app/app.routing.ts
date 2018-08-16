import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from "./shared/login/login.component";
import { AuthGuard } from "./shared/core/guards/auth.guard";
import { Routes } from "@angular/router";
import { RegisterComponent } from "./shared/register/register.component";
import { HomeLayoutComponent } from './shared/layouts/main-layout.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout.component';
import { ListRepairCardsComponentComponent } from './modules/repairCardModule/list-repair-cards-component/list-repair-cards-component.component';

// export const appRoutes: Routes = [
//     { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
//     { path: '**', redirectTo: '' },
//     { path: 'repairCards', loadChildren: './modules/repairCardModule/repairCard.module#RepairCardModule' }
// ];


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'repairCards',
                loadChildren: 'app/modules/repairCardModule/repairCard.module#RepairCardModule'
            }
        ]
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];