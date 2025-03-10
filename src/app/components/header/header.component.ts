import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSun = faSun;
  faMoon = faMoon;
  faBars = faBars;
  faXmark = faXmark;
  isScrolled = false;
  isMenuOpen = false;
  isDarkMode$ = this.themeService.isDarkMode$;

  constructor(private themeService: ThemeService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
} 