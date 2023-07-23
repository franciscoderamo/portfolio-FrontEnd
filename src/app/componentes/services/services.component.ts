import { Component, OnInit } from '@angular/core';
//import { PortfolioService } from 'src/app/services/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Services } from 'src/app/model/services.model';
import { Task } from 'src/app/model/task.model';
import { ServicesService } from 'src/app/services/services.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})

export class ServicesComponent implements OnInit {
  services: Services [] = [];
  task: Task [] = [];

  constructor(private servicesService:ServicesService, private taskService: TaskService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit(): void {
    this.taskService.all().subscribe(data =>{
      this.task=data;
    }),
    this.servicesService.all().subscribe(data =>{
      this.services=data;
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  rastrearPor(indice: number, elemento: number) {
    //console.log(indice, elemento);
  }
}
