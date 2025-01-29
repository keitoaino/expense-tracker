import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionsListComponent } from '../transactions-list/transactions-list.component';

@Component({
  standalone: true,
  imports: [TransactionsListComponent],
  selector: 'root',
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {}
