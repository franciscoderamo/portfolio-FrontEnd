import { Component, Input, OnInit } from '@angular/core';
//import { PortfolioService } from 'src/app/services/data.service';
import { NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { SkillGroup } from 'src/app/model/skill-group.model';
import { Skill } from 'src/app/model/skill.model';
import { SkillGroupService } from 'src/app/services/skill-group.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  //standalone: true,
  //imports: [NgbProgressbarModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})

export class SkillsComponent implements OnInit {
  skill_group: SkillGroup [] = [];
  skill: Skill [] = [];
  constructor(private skillGroupService:SkillGroupService, private skillService: SkillService, private _config:NgbAccordionConfig) {
    _config.closeOthers = true;
  }

  ngOnInit(): void {
    this.skillGroupService.all().subscribe(data =>{
      this.skill_group=data;
    }),
    this.skillService.all().subscribe(data =>{
      this.skill=data;
    });
  }

  rastrearPor(indice: number, elemento: number) {
    console.log(indice, elemento);
  }

}

