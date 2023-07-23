import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/model/services.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-new-services',
  templateUrl: './new-services.component.html',
  styleUrls: ['./new-services.component.css']
})
export class NewServicesComponent implements OnInit {

  name: string = '';
  icon: string = '';
  //person_id = 1;

  constructor(private servicesService: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const services = new Services(this.name, this.icon);
    this.servicesService.new(services).subscribe(data => {
        alert("Servicio añadido");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
