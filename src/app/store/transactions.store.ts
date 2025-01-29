import { computed } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';

import { ITransaction } from '../interfaces/transaction.interface';
import { TransactionType } from '../types/transaction-type.type';

import { transactionsMock } from './transactions.mock';

interface ITransactionsState {
  transactions: ITransaction[];
}

const initialState: ITransactionsState = {
  // transactions: [],
  transactions: transactionsMock,
};

export const TransactionsStore = signalStore(
  withState(initialState),
  withComputed(({ transactions }) => ({
    totalAmount: computed(() => {
      const incomes = transactions()
        .filter(transaction => transaction.type === TransactionType.Income)
        .map(transaction => transaction.amount)
        .reduce((a, b) => a + b);
      const expenses = transactions()
        .filter(transaction => transaction.type === TransactionType.Expense)
        .map(transaction => transaction.amount)
        .reduce((a, b) => a + b);

      return incomes - expenses;
    }),
  })),
);
