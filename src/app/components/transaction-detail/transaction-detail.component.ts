// transaction-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTransactionDetail();
  }

  getTransactionDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transactionService.getTransactionDetail(id).subscribe(transaction => {
        this.transaction = transaction;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

}
