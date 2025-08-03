import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl + '?userId=' + userId);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.apiUrl + '/' + transaction.id, transaction);
  }

  deleteTransaction(transactionId: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + transactionId);
  }
}
