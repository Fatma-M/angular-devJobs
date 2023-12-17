import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Job } from '../../shared/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  jobs!: Job[];
  filteredJobs: Job[] = [];
  filterByTitle: string = '';
  filterByLocation: string = '';
  fullTime: boolean = false;
  noJobsFound: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe({
      next: (data: Job[]) => {
        if (!data?.length) return;
        this.jobs = data;
        this.filteredJobs = this.jobs;
      },
    });
  }

  filterJobs() {
    const filteredByTitleAndPosition = this.jobs.filter((job: Job) => {
      return (
        job.position.toLowerCase().includes(this.filterByTitle) &&
        job.location.toLowerCase().includes(this.filterByLocation)
      );
    });

    const selectedJobs = filteredByTitleAndPosition.filter((job: Job) => {
      if (this.fullTime) {
        return job.contract.includes('Full');
      } else {
        return job.contract;
      }
    });

    this.filteredJobs = selectedJobs;

    if (this.filteredJobs.length < 1) {
      this.noJobsFound = true;
    } else {
      this.noJobsFound = false;
    }
  }
}
