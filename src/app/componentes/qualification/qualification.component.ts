import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
