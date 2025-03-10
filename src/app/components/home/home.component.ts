import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faDownload = faDownload;
  
  constructor(private router: Router) {}
  
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
} 