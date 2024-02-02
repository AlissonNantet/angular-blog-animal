import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  smallPhotoCover: string = '';
  @Input()
  smallCardDescription: string = '';
  @Input()
  Id: string = '0';

  @Input()
  dateDay: string = '';
  @Input()
  dateMounth: string = '';
  @Input()
  dateYear: string = '';
}
