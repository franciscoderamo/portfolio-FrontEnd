import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[] = [];
  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.cargarExperience();
  }

  cargarExperience():void{
    this.experienceService.all().subscribe(data => {
      this.experience = data;
    })
  }

  deleteExperience(id?: number){
    if(id != undefined){
      this.experienceService.delete(id).subscribe(data => {
        this.cargarExperience();
      }, error => {
        alert ("No se pudo borrar la experiencia");
      })
    }
  }
}
