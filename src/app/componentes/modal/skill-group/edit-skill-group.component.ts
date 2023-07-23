import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillGroup } from 'src/app/model/skill-group.model';
import { SkillGroupService } from 'src/app/services/skill-group.service';

@Component({
  selector: 'app-edit-skill-group',
  templateUrl: './edit-skill-group.component.html',
  styleUrls: ['./edit-skill-group.component.css']
})
export class EditSkillGroupComponent implements OnInit {
  skillGroup: SkillGroup = null;

  constructor(private skillGroupService: SkillGroupService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillGroupService.see(id).subscribe(data =>{
      this.skillGroup = data;
    }, error => {
      alert("Error al modificar los datos de la categoría de habilidades.");
    })
  }

  onUpdate(){
    // capture the Experience ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillGroupService.edit(id, this.skillGroup).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos de la categoría de habilidades.");
      }
    )
  }
}
