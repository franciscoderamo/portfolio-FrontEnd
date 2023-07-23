import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experience: Experience = null;

  constructor(private experienceService: ExperienceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.see(id).subscribe(data =>{
      this.experience = data;
    }, error => {
      alert("Error al modificar los datos de experiencia.");
    })
  }

  onUpdate(){
    // capture the Experience ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.edit(id, this.experience).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos de experiencia.");
      }
    )
  }

}
