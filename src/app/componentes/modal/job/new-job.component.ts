import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobsComponent implements OnInit {

  job: string = '';
  bussines: string = '';
  start: Date;
  end: Date;
  //person_id = 1;

  constructor(private jobsService: JobsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const jobs = new Jobs(this.job, this.bussines, this.start, this.end);
    this.jobsService.new(jobs).subscribe(data => {
        alert("Trabajo añadido");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
