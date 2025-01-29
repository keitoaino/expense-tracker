import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'root',
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {}
