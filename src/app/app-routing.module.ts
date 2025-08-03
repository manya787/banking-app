import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AccountManagement } from './account-management/account-management';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'account-management', component: AccountManagement },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
