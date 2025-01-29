import { ITransaction } from '../interfaces/transaction.interface';
import { TransactionCategory } from '../types/transaction-category.type';
import { TransactionType } from '../types/transaction-type.type';

export const transactionsMock: ITransaction[] = [
  {
    name: 'Test',
    amount: 100,
    type: TransactionType.Income,
    category: TransactionCategory.Entertainment,
    date: new Date(),
  },
  {
    name: 'Another',
    amount: 1000,
    type: TransactionType.Income,
    category: TransactionCategory.Groceries,
    date: new Date(),
  },
  {
    name: 'The last',
    amount: 10,
    type: TransactionType.Expense,
    category: TransactionCategory.Entertainment,
    date: new Date(),
  },
];
