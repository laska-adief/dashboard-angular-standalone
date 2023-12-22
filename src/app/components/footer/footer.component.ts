import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-angular-standalone-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  nowYear = new Date().getFullYear();
}
