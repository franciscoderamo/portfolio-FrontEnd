import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/model/services.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesModalComponent implements OnInit {


  services: Services[] = [];
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.cargarServices();
  }

  cargarServices():void{
    this.servicesService.all().subscribe(data => {
      this.services = data;
    })
  }

  deleteServices(id?: number){
    if(id != undefined){
      this.servicesService.delete(id).subscribe(data => {
        this.cargarServices();
      }, error => {
        alert ("No se pudo borrar el servicio.");
      })
    }
  }

}
