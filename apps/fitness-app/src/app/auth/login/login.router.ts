import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './containers/login-container/login-container.component';

const routes: Routes = [
    { path: '', component: LoginContainerComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
