import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule, MatIconModule, MatSidenavModule, MatCommonModule, MatCheckboxModule, MatMenuModule, MatExpansionModule } from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule
  ]
})
export class AppMaterialModule {}