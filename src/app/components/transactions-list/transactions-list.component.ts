import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TransactionsStore } from '../../store/transactions.store';
import { TransactionCategoryPipe } from '../../pipes/transaction-category.pipe';
import { TransactionType } from '../../types/transaction-type.type';

@Component({
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgFor,
    TransactionCategoryPipe,
  ],
  providers: [TransactionsStore],
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsListComponent {
  readonly store = inject(TransactionsStore);

  readonly transactions = this.store.transactions();
  readonly totalAmount = this.store.totalAmount();

  readonly TransactionType = TransactionType;
}
