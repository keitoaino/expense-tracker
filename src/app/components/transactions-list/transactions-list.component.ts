import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of, startWith } from 'rxjs';

import { TransactionCategoryPipe } from '../../pipes/transaction-category.pipe';
import { TransactionsStore } from '../../store/transactions.store';
import { transactionCategories, TransactionCategory } from '../../types/transaction-category.type';
import { TransactionType, transactionTypes } from '../../types/transaction-type.type';
import { mapToOptions } from '../../utils/map-to-options.util';

@Component({
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    ReactiveFormsModule,
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

  readonly totalAmount = computed(() => this.getTotal(TransactionType.Income) - this.getTotal(TransactionType.Expense));
  readonly transactions = linkedSignal(() => this.store.transactions()
    .filter(transaction => this.compareWithNull(transaction.type, this.typeFilterSignal()))
    .filter(transaction => this.compareWithNull(transaction.category, this.categoryFilterSignal())));

  readonly TransactionType = TransactionType;
  readonly transactionCategoryOptions = mapToOptions(transactionCategories);
  readonly transactionTypeOptions = mapToOptions(transactionTypes);

  readonly filtersForm = new FormGroup({
    type: new FormControl<TransactionType | null>(null),
    category: new FormControl<TransactionCategory | null>(null),
  });

  private typeFilterSignal = this.getFormFieldSignal('type');
  private categoryFilterSignal = this.getFormFieldSignal('category');

  private compareWithNull<T>(field: T, value: T | null): boolean {
    console.log(field, value);

    return (value === null) || (field === value);
  }

  private getFormFieldSignal<T>(field: string): Signal<T | null | undefined> {
    return toSignal(this.filtersForm.get(field)?.valueChanges.pipe(startWith(null)) ?? of(null));
  }

  private getTotal(transactionType: TransactionType): number {
    return this.transactions()
      .filter(transaction => transaction.type === transactionType)
      .map(transaction => transaction.amount)
      .reduce((a, b) => a + b, 0);
  }
}
