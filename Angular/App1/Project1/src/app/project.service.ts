import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';

import { project } from './project';
import { Project } from './mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProject(): Observable<project[]> {
    return of(Project);
  }
}
