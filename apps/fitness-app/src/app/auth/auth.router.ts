import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'login' },
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'register', loadChildren: './register/register.module#RegisterModule'}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
