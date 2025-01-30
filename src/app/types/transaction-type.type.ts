export enum TransactionType {
  Income,
  Expense,
}

export const transactionTypes = new Map<TransactionType, string>([
  [TransactionType.Income, 'Income'],
  [TransactionType.Expense, 'Expense'],
]);
