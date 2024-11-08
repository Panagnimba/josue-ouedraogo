import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private dataService: DataService) { }
  protected activeTab = 0
  get tabs() {
    return this.dataService.tabs
  }
  get experienceData() {
    return this.dataService.experienceData
  }
  get educationData() {
    return this.dataService.educationData
  }
  get skillsData() {
    return this.dataService.skillsData
  }

  handleTabClick({ itemId }: { itemId: number }) {
    this.tabs.forEach(tabItem => {
      if (tabItem.id != itemId)
        tabItem.isActive = false
      else{
        this.activeTab = itemId
        tabItem.isActive = true
      }
    })
  }
}