import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  smallPhotoCover: string = '';
  @Input()
  smallCardDescription: string = '';

  @Input()
  dateDay: string = '';
  @Input()
  dateMounth: string = '';
  @Input()
  dateYear: string = '';
}
