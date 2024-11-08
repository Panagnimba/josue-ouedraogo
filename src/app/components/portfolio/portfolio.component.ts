import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private dataService: DataService) { }
  protected activeTab = 0

  get portfolioTabs() {
    return this.dataService.portfolioTabs
  }

  get projects(){
    return this.dataService.projects
  }

  handleTabClick({ itemId }: { itemId: number }) {
    this.portfolioTabs.forEach(tabItem => {
      if (tabItem.id != itemId)
        tabItem.isActive = false
      else{
        this.activeTab = itemId
        tabItem.isActive = true
      }
    })
  }
}
