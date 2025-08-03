import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service'; // Ensure correct path
import { Loan } from '../models/loan.model'; // Define a Loan model

@Component({
  selector: 'app-loan-services',
  templateUrl: './loan-services.component.html',
  styleUrls: ['./loan-services.component.css']
})
export class LoanServicesComponent implements OnInit {
  loans: Loan[] = [];
  selectedLoan: Loan | null = null;
  loanApplication: any = {}; // Object to hold loan application data
  message: string = '';

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.loanService.getLoans().subscribe(
      (data: Loan[]) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching loans', error);
      }
    );
  }

  applyForLoan(): void {
    this.loanService.applyForLoan(this.loanApplication).subscribe(
      (response) => {
        this.message = 'Loan application submitted successfully!';
        this.loanApplication = {}; // Reset form
      },
      (error) => {
        console.error('Error applying for loan', error);
        this.message = 'Failed to submit loan application.';
      }
    );
  }

  selectLoan(loan: Loan): void {
    this.selectedLoan = loan;
  }
}
