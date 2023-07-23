import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  //standalone: true,
  //imports: [NgbProgressbarModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {


  constructor(private _config:NgbAccordionConfig) {
    _config.closeOthers = true;
  }

  ngOnInit(): void {

  }

}
/*
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/model/person.model';
import { PortfolioService } from 'src/app/services/data.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  person!: Person;

  constructor(private personService:PersonService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit(): void {
    this.personService.profile(1).subscribe(data =>{
      this.person = data;
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

}*/
