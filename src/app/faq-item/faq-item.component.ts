import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.sass'
})
export class FaqItemComponent {
  open = false;
  @Input() question: string = '';
  @Input() answer: string = '';

  toggle() {
    this.open = !this.open;
  }
}
