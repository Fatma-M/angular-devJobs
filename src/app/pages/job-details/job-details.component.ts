import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Job } from '../../shared/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  id!: number;
  job!: Job;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.dataService.fetchData().subscribe((data: Job[]) => {
      this.job = data.find((job: Job) => job.id == this.id)!;
    });
  }
}
