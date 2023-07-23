//import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
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
  portfolio: Portfolio [] = [];
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.all().subscribe(data =>{
      this.portfolio = data;
    });
  }

}
