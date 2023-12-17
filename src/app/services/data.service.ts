import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../shared/job';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:3000/jobs');
  }

  addData(job: Job): Observable<Job> {
    return this.http.post<Job>('http://localhost:3000/jobs', job);
  }
}
