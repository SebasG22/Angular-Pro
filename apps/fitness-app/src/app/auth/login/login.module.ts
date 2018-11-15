import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.router';
import { NgModule } from '@angular/core';

import { LoginContainerComponent } from '@fitnessapp/src/auth/login/containers';
import { SharedModule } from '@fitnessapp/src/auth/shared/shared.module';

@NgModule({
    declarations: [
        LoginContainerComponent
    ],
    imports: [ 
        CommonModule,
        LoginRoutingModule,
        SharedModule
     ],
    providers: [],
})
export class LoginModule {}