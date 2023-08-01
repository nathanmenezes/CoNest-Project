import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-advantages-card',
  templateUrl: './advantages-card.component.html',
  styleUrls: ['./advantages-card.component.scss']
})
export class AdvantagesCardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
}
