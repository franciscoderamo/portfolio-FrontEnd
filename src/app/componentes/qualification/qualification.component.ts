import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/model/jobs.model';
import { Studies } from 'src/app/model/studies.model';
import { JobsService } from 'src/app/services/jobs.service';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})

export class QualificationComponent implements OnInit {

  studies: Studies [] = [];
  jobs: Jobs [] = [];

  constructor(private studiesService:StudiesService, private jobsService: JobsService) {
  }

  ngOnInit(): void {
    this.studiesService.all().subscribe(data =>{
      this.studies=data;
    }),
    this.jobsService.all().subscribe(data =>{
      this.jobs=data;
    });
  }

  rastrearPor(indice: number, elemento: number) {
    console.log(indice, elemento);
  }

}
