import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
