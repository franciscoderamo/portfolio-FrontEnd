import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  portfolio: Portfolio;

  constructor(private portfolioService: PortfolioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.see(id).subscribe(data =>{
      this.portfolio = data;
    }, error => {
      alert("Error al modificar los datos del portfolio.");
    })
  }

  onUpdate(){
    // capture the Portfolio ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.edit(id, this.portfolio).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos del portfolio.");
      }
    )
  }
}
