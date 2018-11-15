import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from '@fitnessapp/src/auth/shared/components';


@NgModule({
    declarations: [
        AuthFormComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule
     ],
    exports: [
        AuthFormComponent
    ],
})
export class SharedModule {}