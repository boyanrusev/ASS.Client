import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../shared/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from '../../shared/core/interceptors/error.interceptor';
import { AppComponent } from '../../app.component';
import { ListRepairCardsComponentComponent } from './list-repair-cards-component/list-repair-cards-component.component'
import { RouterModule } from '@angular/router';
import { repairCardRoutes } from './repairCard.routing';

@NgModule({
    declarations: [
        ListRepairCardsComponentComponent],
    imports: [
        RouterModule.forChild(repairCardRoutes)
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class RepairCardModule { }
