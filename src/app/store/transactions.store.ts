import { signalStore, withState } from '@ngrx/signals';

import { ITransaction } from '../interfaces/transaction.interface';

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
);
