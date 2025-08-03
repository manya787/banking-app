// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Home } from './home/home';
// import { AccountManagement } from './account-management/account-management';
// // import { LoanServicesComponent } from './loan-services/loan-services';
// // import { SecureTransactionsComponent } from './secure-transactions/secure-transactions';

// const routes: Routes = [
//   { path: '', component: Home }, // Default route
//   { path: 'account-management', component: AccountManagement },
// //   { path: 'loan-services', component: LoanServicesComponent },
// //   { path: 'secure-transactions', component: SecureTransactionsComponent },
//   // Add more routes as needed
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home'; // Ensure correct import
import { AccountManagement } from './account-management/account-management'; // Ensure correct import

// Define your routes
const routes: Routes = [
  { path: '', component: Home }, // Default route
  { path: 'account-management', component: AccountManagement }, // Route for account management
  // Add more routes as needed
];

// Create and export the AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule] // Export RouterModule so it can be used in the AppModule
})
export class AppRoutingModule { }
