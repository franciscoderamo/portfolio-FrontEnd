import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-modal-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill[] = [];
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.cargarSkill();
  }

  cargarSkill():void{
    this.skillService.all().subscribe(data => {
      this.skill = data;
    })
  }

  deleteSkill(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(data => {
        this.cargarSkill();
      }, error => {
        alert ("No se pudo borrar la habilidad.");
      })
    }
  }

}
