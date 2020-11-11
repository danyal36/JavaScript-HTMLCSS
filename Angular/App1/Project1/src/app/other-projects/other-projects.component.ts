import { Component, OnInit } from '@angular/core';
import { project } from '../project';
// import { Project } from '../mock-projects';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css']
})
export class OtherProjectsComponent implements OnInit {
  
    projects: project[];
    selectedProj: project;
  
    constructor(private projectService: ProjectService) { }
    getProject(): void {
      this.projectService.getProject().subscribe(project => this.projects = project);
    }
    onSelect(proj: project): void {
      this.selectedProj = proj;
    }
    ngOnInit() {
      this.getProject();
    }
    
  }

