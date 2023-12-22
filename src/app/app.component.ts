import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooterComponent],
  selector: 'dashboard-angular-standalone-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-angular-standalone';
}
