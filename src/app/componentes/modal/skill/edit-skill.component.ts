import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill;

  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.see(id).subscribe(data =>{
      this.skill = data;
    }, error => {
      alert("Error al modificar los datos de la habilidad.");
    })
  }

  onUpdate(){
    // capture the Skill ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.edit(id, this.skill).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos de la habilidad.");
      }
    )
  }
}
