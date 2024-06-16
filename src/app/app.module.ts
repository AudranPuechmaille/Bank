// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common'; // Importer CurrencyPipe et DatePipe
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionService } from './services/transaction.service';
import { DateTimeService } from './services/date-time.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    TransactionService,
    DateTimeService,
    CurrencyPipe, // Ajouter CurrencyPipe ici
    DatePipe // Ajouter DatePipe ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
