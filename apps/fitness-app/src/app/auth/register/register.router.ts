import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterContainerComponent } from './containers/register-container/register-container.component';

const routes: Routes = [
    { path: 'register', component: RegisterContainerComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {}
