import { Component, OnInit } from '@angular/core';
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
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  transactionForm: Partial<Transaction> = {};

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    // For demo, using a fixed userId
    this.transactionService.getTransactions('user123').subscribe(
      (data) => this.transactions = data,
      (error) => console.error('Error fetching transactions', error)
    );
  }

  selectTransaction(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    this.transactionForm = { ...transaction };
  }

  createTransaction(): void {
    this.transactionService.createTransaction(this.transactionForm as Transaction).subscribe(
      (newTransaction) => {
        this.transactions.push(newTransaction);
        this.transactionForm = {};
      },
      (error) => console.error('Error creating transaction', error)
    );
  }

  updateTransaction(): void {
    if (!this.selectedTransaction) return;
    this.transactionService.updateTransaction(this.transactionForm as Transaction).subscribe(
      (updatedTransaction) => {
        const index = this.transactions.findIndex(t => t.id === updatedTransaction.id);
        if (index !== -1) this.transactions[index] = updatedTransaction;
        this.selectedTransaction = null;
        this.transactionForm = {};
      },
      (error) => console.error('Error updating transaction', error)
    );
  }

  deleteTransaction(transactionId: string): void {
    this.transactionService.deleteTransaction(transactionId).subscribe(
      () => {
        this.transactions = this.transactions.filter(t => t.id !== transactionId);
        if (this.selectedTransaction?.id === transactionId) {
          this.selectedTransaction = null;
          this.transactionForm = {};
        }
      },
      (error) => console.error('Error deleting transaction', error)
    );
  }
}
