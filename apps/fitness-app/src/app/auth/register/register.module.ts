import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTAINERS } from './containers';
import { RegisterRoutingModule } from './register.router';

@NgModule({
    declarations: [
        CONTAINERS
    ],
    imports: [ 
        CommonModule,
        RegisterRoutingModule 
    ],
    exports: [],
    providers: [],
})
export class RegisterModule {}