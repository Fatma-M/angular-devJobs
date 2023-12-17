import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleDarkMode() {
    const body = this.renderer.selectRootElement('body', true);
    if (this.darkMode === false) {
      this.darkMode = true;
      this.renderer.addClass(body, 'dark');
    } else {
      this.darkMode = false;
      this.renderer.removeClass(body, 'dark');
    }
  }
}
