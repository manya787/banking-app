import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-view-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    // Replace 'userId' with the actual user ID
    this.transactionService.getTransactions('userId').subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      (error: any) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  selectTransaction(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  deleteTransaction(transaction: Transaction): void {
    this.transactionService.deleteTransaction(transaction.id).subscribe(
      () => {
        this.getTransactions();
      },
      (error: any) => {
        console.error('Error deleting transaction:', error);
      }
    );
  }
}
