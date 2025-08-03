import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AccountManagement } from './account-management/account-management';
import { LoanServicesComponent } from './loan-services/loan-services';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'account-management', component: AccountManagement },
  { path: 'loan-services', component: LoanServicesComponent },
  { path: 'transactions/make', loadComponent: () => import('./components/transaction/transaction.component').then(m => m.TransactionComponent) },
  { path: 'transactions/view', loadComponent: () => import('./components/transaction/view-transactions.component').then(m => m.ViewTransactionsComponent) },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
