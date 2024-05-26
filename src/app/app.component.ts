import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqViewComponent } from './faq-view/faq-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaqViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ng-faq-accordion';
}
