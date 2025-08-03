import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-services.html',
  styleUrls: ['./loan-services.css']
})
export class LoanServicesComponent implements OnInit {
  loans: any[] = [
    { name: 'Personal Loan', interestRate: 5.5, amount: 10000, duration: 24 },
    { name: 'Home Loan', interestRate: 3.2, amount: 50000, duration: 120 },
    { name: 'Car Loan', interestRate: 4.8, amount: 20000, duration: 60 }
  ];
  selectedLoan: any = null;
  loanApplication: any = {}; // Object to hold loan application data
  message: string = '';

  constructor() {}

  ngOnInit(): void {
    // In a real app, this would fetch from a service
    // this.fetchLoans();
  }

  applyForLoan(): void {
    // In a real app, this would call a service
    // this.loanService.applyForLoan(this.loanApplication).subscribe(
    this.message = 'Loan application submitted successfully!';
    this.loanApplication = {}; // Reset form
    /*
    (response) => {
      this.message = 'Loan application submitted successfully!';
      this.loanApplication = {}; // Reset form
    },
    (error) => {
      console.error('Error applying for loan', error);
      this.message = 'Failed to submit loan application.';
    }
    */
  }

  selectLoan(loan: any): void {
    this.selectedLoan = loan;
  }
}
