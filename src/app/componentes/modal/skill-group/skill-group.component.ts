import { Component, OnInit } from '@angular/core';
import { SkillGroup } from 'src/app/model/skill-group.model';
import { SkillGroupService } from 'src/app/services/skill-group.service';

@Component({
  selector: 'app-modal-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent implements OnInit {

  skillGroup: SkillGroup[] = [];
  constructor(private skillGroupService: SkillGroupService) { }

  ngOnInit(): void {
    this.cargarSkillGroup();
  }

  cargarSkillGroup():void{
    this.skillGroupService.all().subscribe(data => {
      this.skillGroup = data;
    })
  }

  deleteSkillGroup(id?: number){
    if(id != undefined){
      this.skillGroupService.delete(id).subscribe(data => {
        this.cargarSkillGroup();
      }, error => {
        alert ("No se pudo borrar la categoría.");
      })
    }
  }

}
