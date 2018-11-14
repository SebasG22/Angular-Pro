import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTAINERS } from './containers';
import { LoginRoutingModule } from './login.router';

@NgModule({
    declarations: [
        CONTAINERS
    ],
    imports: [ 
        CommonModule,
        LoginRoutingModule
     ],
    providers: [],
})
export class LoginModule {}