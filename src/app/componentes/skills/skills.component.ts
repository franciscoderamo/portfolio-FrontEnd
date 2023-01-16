import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  misHabilidades:any;
  catSkills:any;
  constructor(private datosPortfolio:PortfolioService, private _config:NgbAccordionConfig) {
    _config.closeOthers = true;
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.misHabilidades=data.skills;
      this.catSkills=data;
    });
  }

  rastrearPor(indice: number, elemento: number) {
    console.log(indice, elemento);
  }

}
