import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  title: string = '';
  porcentage: number;
  idSkillGroup: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.title, this.porcentage, this.idSkillGroup);
    this.skillService.new(skill).subscribe(data => {
        alert("Habilidades añadida");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
