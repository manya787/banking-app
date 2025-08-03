import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router) {}

  navigateToAccountManagement() {
    this.router.navigate(['/account-management']);
  }

  navigateToLoanServices() {
    this.router.navigate(['/loan-services']);
  }

  navigateToTransactions() {
    this.router.navigate(['/transactions']);
  }
}
