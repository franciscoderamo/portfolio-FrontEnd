import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobsComponent implements OnInit {

  jobs: Jobs = null;

  constructor(private jobsService: JobsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.jobsService.see(id).subscribe(data =>{
      this.jobs = data;
    }, error => {
      alert("Error al modificar los datos del trabajo.");
    })
  }

  onUpdate(){
    // capture the jobs ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.jobsService.edit(id, this.jobs).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos del trabajo.");
      }
    )
  }

}
