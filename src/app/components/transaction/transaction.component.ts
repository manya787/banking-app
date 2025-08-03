import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactionForm: Partial<Transaction> = {};

  constructor(private transactionService: TransactionService) {}

  createTransaction(): void {
    this.transactionService.createTransaction(this.transactionForm as Transaction).subscribe(
      (newTransaction) => {
        console.log('Transaction created:', newTransaction);
        this.transactionForm = {};
        // Optionally, show a success message to the user
      },
      (error) => console.error('Error creating transaction', error)
    );
  }
}
