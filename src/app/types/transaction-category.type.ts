export enum TransactionCategory {
  Groceries,
  Salary,
  Entertainment,
}

export const transactionCategories = new Map<TransactionCategory, string>([
  [TransactionCategory.Groceries, 'Groceries'],
  [TransactionCategory.Salary, 'Salary'],
  [TransactionCategory.Entertainment, 'Entertainment'],
]);
