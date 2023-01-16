import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
// import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // constructor(private scriptservice: CargarScriptsService) {
  //   this.scriptservice.loadScript();
  // }

  miMenu:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miMenu=data.menu;
    });
  }

}
