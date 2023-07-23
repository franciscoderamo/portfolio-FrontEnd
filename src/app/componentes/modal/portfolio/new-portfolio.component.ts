import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})
export class NewPortfolioComponent implements OnInit {

  title: string = '';
  image: string = '';
  description: string = '';
  link: string = '';
  idService: number;

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const portfolio = new Portfolio(this.title, this.image, this.description, this.link, this.idService);
    this.portfolioService.new(portfolio).subscribe(data => {
        alert("Portfolio añadido");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
