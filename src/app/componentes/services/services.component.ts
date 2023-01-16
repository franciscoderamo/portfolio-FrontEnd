import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  //providers: [NgbModalConfig, NgbModal]
})
export class ServicesComponent implements OnInit {
  servicesList:any;
  constructor(private datosPortfolio:PortfolioService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.servicesList=data;
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  // export class ServicesComponent implements OnInit {
  //   miPortfolio:any;
  //   constructor(private datosPortfolio:PortfolioService) { }

  //   ngOnInit(): void {
  //     this.datosPortfolio.obtenerDatos().subscribe(data =>{
  //       console.log(data);
  //       this.miPortfolio=data;
  //     });
  //   }

}
