// transaction-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  goToDetail(id: string): void {
    this.router.navigate(['/transaction', id]);
  }

  sortBy(key: string): void {
    this.transactions.sort((a, b) => {
      // Convertir les dates en timestamps pour une comparaison facile
      if (key === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      }

      // Gestion spécifique pour les nombres
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key];
      }

      // Gestion spécifique pour les chaînes de caractères (ignore la casse)
      if (typeof a[key] === 'string' && typeof b[key] === 'string') {
        return a[key].toLowerCase().localeCompare(b[key].toLowerCase());
      }

      // Par défaut, aucune transformation spécifique nécessaire
      return 0;
    });
  }

}
