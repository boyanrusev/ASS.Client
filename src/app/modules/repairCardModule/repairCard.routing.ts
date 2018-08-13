import { AuthGuard } from './../../shared/core/guards/auth.guard';
import { ListRepairCardsComponentComponent } from 'src/app/modules/repairCardModule/list-repair-cards-component/list-repair-cards-component.component'
import { Routes } from "../../../../node_modules/@angular/router";

export const repairCardRoutes: Routes = [
    { path: 'repairCards', component: ListRepairCardsComponentComponent, canActivate: [AuthGuard] }
];