import { Component } from '@angular/core';
import { FaqContainerComponent } from '../faq-container/faq-container.component';

@Component({
  selector: 'app-faq-view',
  standalone: true,
  imports: [FaqContainerComponent],
  templateUrl: './faq-view.component.html',
  styleUrl: './faq-view.component.sass'
})
export class FaqViewComponent {

}
