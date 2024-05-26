import { Component, Input } from '@angular/core';
import { FaqItemComponent } from '../faq-item/faq-item.component';
import { faqList } from '../data/faq-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-container',
  standalone: true,
  imports: [FaqItemComponent, CommonModule],
  templateUrl: './faq-container.component.html',
  styleUrl: './faq-container.component.sass'
})
export class FaqContainerComponent {
  @Input() title: string = ''
  faqList = faqList
}
