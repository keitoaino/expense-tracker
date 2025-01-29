import { Pipe, PipeTransform } from '@angular/core';

import { transactionCategories, TransactionCategory } from '../types/transaction-category.type';

@Pipe({
  standalone: true,
  name: 'transactionCategory',
})
export class TransactionCategoryPipe implements PipeTransform {
  transform(category: TransactionCategory) {
    return transactionCategories.get(category);
  }
}
