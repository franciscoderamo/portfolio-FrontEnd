import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-modal-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobsComponent implements OnInit {


  jobs: Jobs[] = [];
  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.cargarJobs();
  }

  cargarJobs():void{
    this.jobsService.all().subscribe(data => {
      this.jobs = data;
    })
  }

  deleteJobs(id?: number){
    if(id != undefined){
      this.jobsService.delete(id).subscribe(data => {
        this.cargarJobs();
      }, error => {
        alert ("No se pudo borrar el trabajo.");
      })
    }
  }
}
