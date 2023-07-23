import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioModalComponent implements OnInit {

  portfolio: Portfolio[] = [];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarPortfolio();
  }

  cargarPortfolio():void{
    this.portfolioService.all().subscribe(data => {
      this.portfolio = data;
    })
  }

  deletePortfolio(id?: number){
    if(id != undefined){
      this.portfolioService.delete(id).subscribe(data => {
        this.cargarPortfolio();
      }, error => {
        alert ("No se pudo borrar la habilidad.");
      })
    }
  }

}
