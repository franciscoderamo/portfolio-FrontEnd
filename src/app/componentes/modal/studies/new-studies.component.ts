import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatepickerServiceInputs } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import { Studies } from 'src/app/model/studies.model';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-new-studies',
  templateUrl: './new-studies.component.html',
  styleUrls: ['./new-studies.component.css']
})
export class NewStudiesComponent implements OnInit {
  carrer: string = '';
  institution: string = '';
  start: Date;
  end: Date;
  //person_id = 1;

  constructor(private studiesService: StudiesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const studies = new Studies(this.carrer, this.institution, this.start, this.end);
    this.studiesService.new(studies).subscribe(data => {
        alert("Estudio añadido");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
