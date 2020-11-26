import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';

import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{ path: 'createuser', component: CreateuserComponent },
{
  path: 'edit-user/:id',
  component: CreateuserComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
