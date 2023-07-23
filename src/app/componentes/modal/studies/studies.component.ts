import { Component, OnInit } from '@angular/core';
import { Studies } from 'src/app/model/studies.model';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-modal-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  studies: Studies[] = [];
  constructor(private studiesService: StudiesService) { }

  ngOnInit(): void {
    this.cargarStudies();
  }

  cargarStudies():void{
    this.studiesService.all().subscribe(data => {
      this.studies = data;
    })
  }

  deleteStudies(id?: number){
    if(id != undefined){
      this.studiesService.delete(id).subscribe(data => {
        this.cargarStudies();
      }, error => {
        alert ("No se pudo borrar el estudio.");
      })
    }
  }

}
