import { TransactionCategory } from '../types/transaction-category.type';
import { TransactionType } from '../types/transaction-type.type';

export interface ITransaction {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  date: Date;
}
