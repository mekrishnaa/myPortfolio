import { Component } from '@angular/core';
import { faCode, faServer, faMobileScreen, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faCode = faCode;
  faServer = faServer;
  faMobileScreen = faMobileScreen;
  faDatabase = faDatabase;
  
  age = new Date().getFullYear() - 1997; // Assuming birth year is 1997
} 