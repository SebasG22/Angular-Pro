import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from '@fitnessapp/src/auth/register/register.router';
import { SharedModule } from '@fitnessapp/src/auth/shared/shared.module';
import { RegisterContainerComponent } from '@fitnessapp/src/auth/register/containers';

@NgModule({
    declarations: [
        RegisterContainerComponent
    ],
    imports: [ 
        CommonModule,
        RegisterRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class RegisterModule {}