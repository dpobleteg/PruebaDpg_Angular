import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {path: 'crud', component: UserCrudComponent},
  {path: 'users/:id/Detalle', component: UserDetailComponent},
  {path: 'users/:id/Editar', component: UserEditComponent},
  {path: 'users/add', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
