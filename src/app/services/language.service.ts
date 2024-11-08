import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en'; // Default language

  constructor() {}

  // Get the current language
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  // Set the current language
  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
