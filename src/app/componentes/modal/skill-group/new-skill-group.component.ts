import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillGroup } from 'src/app/model/skill-group.model';
import { SkillGroupService } from 'src/app/services/skill-group.service';

@Component({
  selector: 'app-new-skill-group',
  templateUrl: './new-skill-group.component.html',
  styleUrls: ['./new-skill-group.component.css']
})
export class NewSkillGroupComponent implements OnInit {
  category: string = '';
  ages: number;
  icon: string = '';
  //person_id = 1;

  constructor(private skillGroupService: SkillGroupService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skillGroup = new SkillGroup(this.category, this.ages, this.icon);
    this.skillGroupService.new(skillGroup).subscribe(data => {
        alert("Categoría de habilidades añadida");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
