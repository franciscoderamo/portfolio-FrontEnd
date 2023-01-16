//import { Component } from '@angular/core';
//import { CargarScripsService } from "./cargar-scrips.service";
import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Portfolio';

  // constructor(private _CargarScripts:CargarScripsService ){
  //   _CargarScripts.Carga(["main"]);

  // }
  constructor(private scriptservice: CargarScriptsService) {

    this.scriptservice.loadScript();

  }
}
