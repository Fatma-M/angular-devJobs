import { Component, Input } from '@angular/core';
import { Job } from '../../shared/job';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
})
export class JobItemComponent {
  @Input() job!: Job;
}
