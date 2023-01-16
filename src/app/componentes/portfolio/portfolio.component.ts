//import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  portfolioList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.portfolioList=data.portfolio;
    });
  }

}
