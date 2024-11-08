import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public currentLanguage: string = ""
  constructor(private languageService: LanguageService) {
    this.currentLanguage = languageService.getCurrentLanguage()
  }
  handleSelectLang(event: Event): void {
    this.currentLanguage = (event.target as HTMLSelectElement).value
    this.languageService.setCurrentLanguage(this.currentLanguage)
  }
}
