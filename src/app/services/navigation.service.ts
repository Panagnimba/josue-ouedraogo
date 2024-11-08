import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private currentNavigation: number = 1; // Default Home page

  // Get the current nav
  getCurrentNavigation(): number {
    return this.currentNavigation;
  }

  // Set the current nav
  setCurrentNavigation(selectedNav: number): void {
    this.currentNavigation = selectedNav;
  }
}
